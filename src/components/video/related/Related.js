import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedVideos } from '../../../features/relatedVideos/relatedVideosSlice'
import Loading from '../../ui/Loading'
import RelatedVideoItem from './RelatedVideoItem'

const Related = ({ tags, currentId }) => {
    const { relatedVideos, isLoading, isError, error } = useSelector(state => state.relatedVideos);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currentId }))
    }, [currentId, dispatch, tags])

    
    
    let content = []
    if (isLoading) content = <Loading />
    if (!isLoading && !isError && relatedVideos.length < 1) content = <div className="col-span-12">No related videos found</div>
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && relatedVideos.length > 0) {
        content = relatedVideos.map(video => <RelatedVideoItem key={video.id} video={video} />)
    }
    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    )
}

export default Related