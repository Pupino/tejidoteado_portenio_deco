import React, { useState } from 'react'

export default function ItemCount({ stock, initial }) {

  const [qty, setQty] = useState(initial);

  function addition() {
    if (qty < stock){
        setQty(qty + 1);
    }
  }

  function subtraction() {
    if (qty > 0){
        setQty(qty - 1);
    }
  }

  return (
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
            <button type="button" class="btn btn-default btn-number" data-type="minus" onClick={subtraction}>
                <i class="bi bi-dash-square"></i>
            </button>
            <span>{qty}</span>
            <button type="button" class="btn btn-default btn-number" data-type="plus" onClick={addition}>
                <i class="bi bi-plus-square"></i>
            </button>
        </div>
        <div class="text-center">
            <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
        </div>
    </div>
  )
}
