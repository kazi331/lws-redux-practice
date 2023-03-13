import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import DescriptionLoader from "../ui/loaders/DescriptionLoader";
import PlayerLoader from "../ui/loaders/PlayerLoader";
import RelatedVideoLoader from "../ui/loaders/RelatedVideoLoader";
import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";


export default function Video() {
    const { videoId } = useParams();
    const getVideo = useGetVideoQuery(videoId, {
        refetchOnMountOrArgChange: 5, // true or time in seconds
    })
    const { isLoading, isFetching, isError, data: video } = getVideo;


    let content = null;
    if (isError) content = <Error message="Error Loading data" />
    if (isLoading) content = <> <PlayerLoader /> <DescriptionLoader /> </>
    if (!isLoading && video?.id) {
        const { link, title, } = video
        content = <><Player link={link} title={title} /><Description video={video} /></>
    }

    return (

        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        {content}
                    </div>

                    {
                        (isLoading || isFetching) ? <div><RelatedVideoLoader /><RelatedVideoLoader /><RelatedVideoLoader /></div> :
                            video?.id ? <RelatedVideos id={video.id} title={video.title} /> : <Error />
                    }
                </div>
            </div>
        </section>
    );
}
