import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../../features/filter/filterSlice';
import { fetchTags } from '../../features/tags/tagsSlice';
import Loading from '../ui/Loading';

const Tags = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])
    const { tags, isLoading, isError, error } = useSelector(state => state.tags)
    const { tags: selectedTags } = useSelector(state => state.filter)
    if (!isLoading && !isError && tags.length < 1) return;


    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            dispatch(tagRemoved(tag))
        } else {
            dispatch(tagSelected(tag))
        }
    }


    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {isLoading && <Loading />}
                {isError && <h2>{error}</h2>}
                {tags.map(tag => <div
                    onClick={() => toggleTag(tag.title)}
                    key={tag.id}
                    className={`${selectedTags.includes(tag.title) ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"} select-none px-4 pb-1 rounded-full cursor-pointer`}>
                    {tag.title}
                </div>)}
            </div>
        </section>
    )
}

export default Tags