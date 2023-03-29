export const selectAllVideos = state => state.videos.videos;
export const selectWatchedVideos = state => state.videos.videos.filter(v => v.watched);
export const selectUnWatchedVideos = state => state.videos.videos.filter(v => !v.watched);