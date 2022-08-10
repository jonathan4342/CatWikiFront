import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { InitialCats } from '../../interfaces/Interfaces';
import axios from 'axios';

const initialState:InitialCats={
    cats:[],
    catId:[],
    catImg:[]
}

export const catSlice= createSlice({
    name:'root',
    initialState,
    reducers:{
        setCats:(initialState,{payload})=>{
            initialState.cats=payload
        },
        setCatId:(initialState,{payload})=>{
            initialState.catId=payload
        },
        setCatImg:(initialState,{payload})=>{
            initialState.catImg=payload
        },
        setNull:(initialState,{payload})=>{
            initialState.catId=payload,
            initialState.catImg=payload
        }
    }
})

export const {setCats,setCatId,setCatImg,setNull}=catSlice.actions;

export default catSlice.reducer;

export const getCats=createAsyncThunk(
    'breeds',
    async(id,thunkAPI)=>{
        const {dispatch}=thunkAPI;
        const {data}=await axios.get(`http://localhost:3001/breeds`)
        dispatch(setCats(data))
    }
)
export const getCatId=createAsyncThunk(
    'breeds/name',
    async(name:string,thunkAPI)=>{
        const {dispatch}=thunkAPI;
        const {data}=await axios.get(`http://localhost:3001/breeds/${name}`)
        dispatch(setCatId(data))
    }
)
export const getCatIdImg=createAsyncThunk(
    'breeds/id',
    async(id:string,thunkAPI)=>{
        const {dispatch}=thunkAPI;
        const {data}=await axios.get(`http://localhost:3001/breedsImg/${id}`)
        dispatch(setCatImg(data))
    }
)
export const clearCatId=createAsyncThunk(
    'clearId',
    async(id,thunkAPI)=>{
        const{dispatch}=thunkAPI;
        dispatch(setNull(null))
    }
)




