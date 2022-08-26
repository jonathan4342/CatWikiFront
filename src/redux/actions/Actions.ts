import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCatId, setCatImg, setCats } from '../slice/Slice';


export const getCats = createAsyncThunk(
    'breeds',
    async (id, thunkAPI) => {
        const { dispatch } = thunkAPI;
        const { data } = await axios.get(`http://localhost:3001/breeds`)
        dispatch(setCats(data))
    }
)
export const getCatId = createAsyncThunk(
    'breeds/name',
    async (name: string, thunkAPI) => {
        const { dispatch } = thunkAPI;
        const { data } = await axios.get(`http://localhost:3001/breeds/${name}`)
        dispatch(setCatId(data))
    }
)
export const getCatIdImg = createAsyncThunk(
    'breeds/id',
    async (id: string, thunkAPI) => {
        const { dispatch } = thunkAPI;
        const { data } = await axios.get(`http://localhost:3001/breedsImg/${id}`)
        dispatch(setCatImg(data))
    }
)