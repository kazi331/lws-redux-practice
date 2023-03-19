import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apliSlice';
import authSlice from '../features/auth/authSlice';
import conversationsSlice from '../features/conversations/conversationsSlice';
import messagesSlice from '../features/messages/messagesSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    messages: messagesSlice,
    conversations: conversationsSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
