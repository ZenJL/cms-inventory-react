import { configureStore } from '@reduxjs/toolkit';

//// Slice
import appSlice from 'state/app/appSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});
