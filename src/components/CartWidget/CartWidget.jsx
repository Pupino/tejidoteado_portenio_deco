import React from 'react'

function CartWidget(props) {
  return (
    <form className="d-flex">
      <button className="btn btn-outline-dark" type="submit">
          <i className="bi-cart-fill me-1"></i>
          {props.label}
          <span className="badge bg-dark text-white ms-1 rounded-pill">{props.quantity}</span>
      </button>
    </form>
  )
}

export default CartWidget