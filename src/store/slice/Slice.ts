import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { InitialCats } from '../../interfaces/Interfaces';
import axios from 'axios';

const initialState:InitialCats={
    cats:[]
}

export const catSlice= createSlice({
    name:'root',
    initialState,
    reducers:{
        setCats:(initialState,{payload})=>{
            initialState.cats=payload
        }
    }
})

export const {setCats}=catSlice.actions;

export default catSlice.reducer;

export const getCats=createAsyncThunk(
    'breeds',
    async(id,thunkAPI)=>{
        const {dispatch}=thunkAPI;
        const {data}=await axios.get(`http://localhost:3001/breeds`)
        dispatch(setCats(data))
    }
)


