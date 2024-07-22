import { productList } from './productList'
import { createStore } from 'redux'

const initialState = {
  products: productList,
  cartItems: [],
  wishList: [],
}

const CART_ADD_ITEM = 'cart/addItem'
const CART_REMOVE_ITEM = 'cart/removeItem'
const CART_INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity'
const CART_DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity'
const WISHLIST_ADD_ITEM = 'wishList/addItem'
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

function reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId !== action.payload.productId
        ),
      }
    case CART_INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.productId === action.payload.productId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      }
    case CART_DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((cartItem) =>
            cartItem.productId === action.payload.productId
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity > 0),
      }

    case WISHLIST_ADD_ITEM:
      return { ...state, wishList: [...state.wishList, action.payload] }
    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishList: state.wishList.filter(
          (wishListItem) => wishListItem.productId !== action.payload.productId
        ),
      }
    default:
      return state
  }
  //   return state
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store)

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 15, quantity: 3 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 16, quantity: 3 } })
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 12, quantity: 2 },
})
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 12 } })
store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 16 },
})
store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 16 },
})
store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 16 },
})
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 16 },
})
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 16 },
})
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 16 },
})
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 16 },
})
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 16 },
})
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 16 },
})
store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 1, quantity: 1 },
})
store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 2, quantity: 1 },
})
store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 3, quantity: 1 },
})
store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productId: 3 },
})
export default store
