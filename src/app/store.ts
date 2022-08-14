import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../modules/home/slices/home.slice'
import uiSlice from '../modules/shared/slice/ui.slice'

export const store = configureStore({
  reducer: {
    home: homeSlice,
    ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
