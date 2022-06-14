import { createAsyncThunk,createSlice,isRejectedWithValue } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/products";
import { DB_URL } from '../../Constants/firebase';

const initialState = {
    value: {
        cart: [],
        response: {},
        loading: false,
        error: false,
    }
}

export const confirmPurchase = createAsyncThunk(
    'cart/confirm',
    async (items,asyncThunk) => {
        try {

            const res = await fetch(
                `${DB_URL}orders.json`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        date: new Date().toLocaleDateString(),
                        items: items,
                        total: items.reduce((acc,item) => acc + item.price,0)
                    })
                }
            );
            const data = res.json();
            state.cart.value = [];
            return data;
        } catch (error) {
            return isRejectedWithValue(error);
        }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state,action) => {
            const productoRepetido = state.value.cart.find(producto => producto.id === action.payload.id);
            if (productoRepetido) {
                state.value.cart.map(producto => {
                    if (producto.id === action.payload.id) {
                        producto.quantity += 1;
                    } else {
                        return producto;
                    }
                })
            } else {
                const producto = PRODUCTS.find(producto => producto.id === action.payload.id);
                state.value.cart.push({ ...producto,quantity: 1 });
            }
        },
        removeItem: (state,action) => {
            const cartSinProd = state.value.cart.filter(producto => producto.id !== action.payload.id);
            state.value.cart = cartSinProd;
        }
    },
    extraReducers: {
        [confirmPurchase.pending]: (state) => {
            state.value.loading = true;
        },
        [confirmPurchase.fulfilled]: (state,{ payload }) => {
            state.value.response = payload;
            state.value.loading = false;
        },
        [confirmPurchase.rejected]: (state) => {
            state.value.loading = false;
        }
    }
})

export const { addItem,removeItem } = cartSlice.actions

export default cartSlice.reducer