import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../Data/categories";

const initialState = {
    value: {
        categories: CATEGORIES,
        categorySelected: ''
    }
}

export const categorieSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        selectCategory: (state,action) => {
            // action.payload es el parámetro que me manda el componente
            const categorySelected = state.value.categories.find(category => category.id === action.payload);
            state.value.categorySelected = categorySelected.category;
        }
    }
})

export const { selectCategory } = categorieSlice.actions

export default categorieSlice.reducer