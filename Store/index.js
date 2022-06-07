import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../Features/categories'
import productsReducer from '../Features/products'
import cartReducer from '../Features/cart'
import ordersReducer from '../Features/orders'
import authReducer from '../Features/auth'
import locationReducer from '../Features/locations'

const Store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer,
        orders: ordersReducer,
        auth: authReducer,
        location: locationReducer
    }
})

export default Store;