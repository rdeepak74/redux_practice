// import { productList } from './productList'
import { combineReducers, createStore } from 'redux'
import cartReducer from './slice/cartSlice'
import wishListReducer from './slice/wishListSlice'
import productReducer from './slice/productSlice'
import { configureStore } from '@reduxjs/toolkit'

// const initialState = {
//   products: productList,
//   cartItems: [],
//   wishList: [],
// }

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

export default store
