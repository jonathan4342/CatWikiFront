import { createSlice } from '@reduxjs/toolkit';
import { InitialCats } from '../../interfaces/Interfaces';

const initialState: InitialCats = {
    cats: [],
    catId: [],
    catImg: []
}

export const catSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setCats: (initialState, { payload }) => {
            initialState.cats = payload
        },
        setCatId: (initialState, { payload }) => {
            initialState.catId = payload
        },
        setCatImg: (initialState, { payload }) => {
            initialState.catImg = payload
        },
        setNull:(initialState)=>{
            initialState.catId=[];
            initialState.catImg=[]
        }
    }
})

export const { setCats, setCatId, setCatImg,setNull } = catSlice.actions;

export default catSlice.reducer;







