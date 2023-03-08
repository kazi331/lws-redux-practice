import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../features/tags/tagsSlice';
import Loading from '../ui/Loading';

const Tags = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])
    const { tags, isLoading, isError, error } = useSelector(state => state.tags)

    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {isLoading && <Loading />}
                {isError && <h2>{error}</h2>}
                {tags.map(tag => <div key={tag.id} className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
                    {tag.title}
                </div>)}

                {/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
                    redux
                </div> */}
            </div>
        </section>
    )
}

export default Tags