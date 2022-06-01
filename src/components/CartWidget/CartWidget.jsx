import React from 'react'

function CartWidget(props) {
  return (
    <form class="d-flex">
      <button class="btn btn-outline-dark" type="submit">
          <i class="bi-cart-fill me-1"></i>
          {props.label}
          <span class="badge bg-dark text-white ms-1 rounded-pill">{props.quantity}</span>
      </button>
    </form>
  )
}

export default CartWidget