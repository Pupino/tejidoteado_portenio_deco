import React from 'react'
import { NavLink } from 'react-router-dom';

const CartItem = (props) => {
	const totalPrice = (props.qty * props.price);
	return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* <!-- Product image--> */}
                <NavLink to={`/item/${props.id}`}><img className="card-img-top" src={props.img} alt="..." /></NavLink>
                {/* <!-- Product details--> */}
                <div className="card-body p-4 pb-2 border-bottom">
                    <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{props.name}</h5>
                    </div>
                    <div>
                        <div className="p-2">Cantidad: {props.qty}</div>
                        {/* <!-- Product price--> */}
                        <div className="p-2">Precio por Unidad: ${props.price}</div>
                        <div className="p-2">Precio Total: {`$ ${totalPrice}`}</div>
                    </div>
                </div>
                <button className="btn btn-outline-secondary active text-light m-4" onClick={() => {props.onDelete(props.id);}}>Remover Item</button>
            </div>
        </div>
	);
};

export default CartItem;