// import { productList } from './productList'
import { combineReducers, createStore } from 'redux'
import cartReducer from './cartReducer'
import wishListReducer from './wishListReducer'
import productReducer from './productReducer'

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
// console.log(store)

export default store
