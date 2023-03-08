import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from '../features/tags/tagsSlice';
import videosReducer from '../features/videos/videosSlice';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice';
import videoReducer from '../features/video/videoSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    relatedVideos: relatedVideosReducer,
    tags: tagsReducer,
    video: videoReducer,
    filter: filterReducer,
  },
});
