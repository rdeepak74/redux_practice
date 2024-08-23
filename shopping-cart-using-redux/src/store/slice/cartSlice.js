import { createSlice } from '@reduxjs/toolkit'

const findItemIndex = (state, action) =>
  state.findIndex((item) => item.productId === action.payload.productId)

const slice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1
      } else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      state.splice(existingItemIndex, 1)
    },
    increaseCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      state[existingItemIndex].quantity += 1
    },
    decreaseCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      state[existingItemIndex].quantity -= 1
      if (state[existingItemIndex].quantity === 0) {
        state.splice(existingItemIndex, 1)
      }
    },
  },
})
// console.log(slice.actions.addCartItem())

export const {
  addCartItem,
  removeCartItem,
  increaseCartItem,
  decreaseCartItem,
} = slice.actions

export default slice.reducer
