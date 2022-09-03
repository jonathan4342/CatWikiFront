import { createSlice } from '@reduxjs/toolkit';
import { InitialCats } from '../../interfaces/Interfaces';

const initialState: InitialCats = {
    cats: [],
    catId: [],
    catImg: [],
    search: []
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
        setNull: (initialState) => {
            initialState.catId = [];
            initialState.catImg = []
        },
        setSearch: (initialState, { payload }) => {
            initialState.search = initialState.cats.filter(e => e.name.toLowerCase().includes(payload.toLowerCase()))
        }
    }
})

export const { setCats, setCatId, setCatImg, setNull,setSearch} = catSlice.actions;

export default catSlice.reducer;







