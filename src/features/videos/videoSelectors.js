import { createSelector } from "@reduxjs/toolkit";
export const selectAllVideos = state => state.videos.videos;
export const selectWatchedVideos = state => state.videos.videos.filter(v => v.watched);
export const selectMemoizedWatchedVideos = createSelector(selectAllVideos, (allVideos) => allVideos.filter(v => v.watched));
export const selectUnWatchedVideos = state => state.videos.videos.filter(v => !v.watched);
export const selectMemoizedUnWatchedVideos = createSelector(selectAllVideos, (allVideos) => allVideos.filter(v => !v.watched))