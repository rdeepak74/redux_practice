import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseCartItem, increaseCartItem } from '../store/cartReducer'

function CartItem({ productId, title, rating, price, imageUrl, quantity }) {
  const dispatch = useDispatch()
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          onClick={() => {
            dispatch(decreaseCartItem(productId))
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            dispatch(increaseCartItem(productId))
          }}
        >
          +
        </button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  )
}

export default CartItem
