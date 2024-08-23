import cartReducer from './slice/cartSlice'
import wishListReducer from './slice/wishListSlice'
import productReducer from './slice/productSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
})
console.log(store)

export default store
