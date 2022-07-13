import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query'
import { useSelector } from 'react-redux';
import catSlice from '../store/slice/Slice'
export const store=configureStore({
    reducer:{
        catSlice
    }
})

export type RootState= ReturnType<typeof store.getState>

export const useAppSelector=()=>useSelector((state:RootState)=>state)

setupListeners(store.dispatch)