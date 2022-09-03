import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import catSlice from './slice/Slice'
export const store = configureStore({
    reducer: {
        catSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// Custom app dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
