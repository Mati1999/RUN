import { createAsyncThunk,createSlice,isRejectedWithValue } from "@reduxjs/toolkit";
import { DB_URL } from '../../Constants/firebase';

const initialState = {
    value: {
        orders: [],
        loading: false,
        error: false,
    }
}

export const getOrders = createAsyncThunk(
    'orders/getOrders',
    async (_,asyncThunk) => {
        try {
            const res = await fetch(`${DB_URL}orders.json`);
            const data = Object.values(await res.json());
            return data
        } catch (error) {
            return isRejectedWithValue(error);
        }
    }
)

export const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: {
        [getOrders.pending]: (state) => {
            state.value.loading = true;
        },
        [getOrders.fulfilled]: (state,{ payload }) => {
            state.value.orders = payload;
            state.value.loading = false;
        },
        [getOrders.rejected]: (state) => {
            state.value.loading = false;
            state.value.error = true;
        }
    },
})

export default orderSlice.reducer