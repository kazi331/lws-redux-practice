import { useGetRelatedVideosQuery } from "../../../features/api/apiSlice";
import Error from "../../ui/Error";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideos({ id, title }) {

    const { isLoading, isError, data: videos } = useGetRelatedVideosQuery({ id, title })
   

    // render on the ui
    let content = null;
    if (isLoading) content = <>
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
    </>
    if (!isLoading && isError) content = <Error />
    if (!isLoading && !isError && videos.length < 1) content = <Error message="No related videos found!" />
    if (!isLoading && !isError && videos.length > 0) content = videos?.map(video => <RelatedVideo key={video.id} video={video} />)

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
           {content}
        </div>
    );
}
