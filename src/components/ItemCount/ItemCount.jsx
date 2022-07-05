import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ItemCount(props) {
  let initial = props.initial;
  let stock = props.stock;

  const [qty, setQty] = useState(initial);

  const addition = () => {
    qty < stock && setQty(qty + 1);
  }

  const subtraction = () => {
    qty > 0 && setQty(qty - 1);
  }

  function add(event) {
    //console.log('qty from itemCount: ' + qty);
    props.onAdd(event, qty); //listener on ItemDetail
  }

  return (
    <div id="countElement" className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
            <button type="button" className="btn btn-default btn-number" data-type="minus" onClick={subtraction}>
                <i className="bi bi-dash-square"></i>
            </button>
            <span>{qty}</span>
            <button type="button" className="btn btn-default btn-number" data-type="plus" onClick={addition}>
                <i className="bi bi-plus-square"></i>
            </button>
        </div>
        <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" onClick={add}>Agregar al Carrito</button>
        </div>
    </div>
  )
}
