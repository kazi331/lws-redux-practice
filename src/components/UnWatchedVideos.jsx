import { useSelector } from "react-redux";
import { selectMemoizedUnWatchedVideos } from "../features/videos/videoSelectors";
import VideoItem from "./VideoItem";

export default function UnWatchedVideos() {
    const unWatchedVideos = useSelector(selectMemoizedUnWatchedVideos);

    console.log("[unWatchedVideos] renders");

    return (
        <div>
            <ul className="divide-y divide-slate-200">
                {unWatchedVideos.map((video) => (
                    <VideoItem key={video.id} video={video} />
                ))}
            </ul>
        </div>
    );
}
