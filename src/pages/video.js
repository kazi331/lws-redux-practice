import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '../components/ui/Loading'
import Description from '../components/video/descripton/Description'
import Player from '../components/video/Player'
import Related from '../components/video/related/Related'
import { fetchVideo } from '../features/video/videoSlice'

const Video = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchVideo(id))
       }, [dispatch, id])
    const { video, isLoading, isError, error } = useSelector(state => state.video)


    // render content 
    let content = {}
    if (isLoading) content = <Loading />
    if (!isLoading && !isError && !video.id) content = <div className="col-span-12">No video found</div>
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError) {
        const {id, tags, title, link } = video || {}
        content = <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
                <Player title={title} link={link} />
                <Description video={video} />
            </div>
            <Related tags={tags} currentId={id} />
        </div>
    }
    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>
    )
}

export default Video