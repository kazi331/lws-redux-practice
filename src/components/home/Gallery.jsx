import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videosSlice';
import Loading from '../ui/Loading';
import VideoItem from './VideoItem';

const Gallery = () => {
    const dispatch = useDispatch();
    const {tags, search } = useSelector(state => state.filter)
    const { videos, isLoading, isError, error } = useSelector(state => state.videos)
    useEffect(() => {
        dispatch(fetchVideos({tags, search}))
    }, [dispatch, tags, search])
    // render content 
    let content;
    if (isLoading) content = <Loading />
    if (isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && videos.length) {
        content = videos?.map(video => <VideoItem key={video.id} video={video} />)
    }
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {content}
                </div>
            </section>
        </section>
    )
}

export default Gallery