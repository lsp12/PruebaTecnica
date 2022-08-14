import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../modules/home/slices/home.slice'

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
