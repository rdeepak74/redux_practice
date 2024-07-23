// import { productList } from './productList'
import { combineReducers, createStore } from 'redux'
import cartReducer, {
  addCartItem,
  decreaseCartItem,
  increaseCartItem,
  removeCartItem,
} from './cartReducer'
import wishListReducer, {
  addWishListItem,
  removeWishListItem,
} from './wishListReducer'
import productReducer from './productReducer'

// const initialState = {
//   products: productList,
//   cartItems: [],
//   wishList: [],
// }

// const CART_ADD_ITEM = 'cart/addItem'
// const CART_REMOVE_ITEM = 'cart/removeItem'
// const CART_INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity'
// const CART_DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity'
// const WISHLIST_ADD_ITEM = 'wishList/addItem'
// const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

// function reducer(state = initialState, action) {
//   console.log(action)
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       return { ...state, cartItems: [...state.cartItems, action.payload] }
//     case CART_REMOVE_ITEM:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           (cartItem) => cartItem.productId !== action.payload.productId
//         ),
//       }
//     case CART_INCREASE_ITEM_QUANTITY:
//       return {
//         ...state,
//         cartItems: state.cartItems.map((cartItem) =>
//           cartItem.productId === action.payload.productId
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         ),
//       }
//     case CART_DECREASE_ITEM_QUANTITY:
//       return {
//         ...state,
//         cartItems: state.cartItems
//           .map((cartItem) =>
//             cartItem.productId === action.payload.productId
//               ? { ...cartItem, quantity: cartItem.quantity - 1 }
//               : cartItem
//           )
//           .filter((cartItem) => cartItem.quantity > 0),
//       }

//     case WISHLIST_ADD_ITEM:
//       return { ...state, wishList: [...state.wishList, action.payload] }
//     case WISHLIST_REMOVE_ITEM:
//       return {
//         ...state,
//         wishList: state.wishList.filter(
//           (wishListItem) => wishListItem.productId !== action.payload.productId
//         ),
//       }
//     default:
//       return state
//   }
//   //   return state
// }

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store)

export default store
