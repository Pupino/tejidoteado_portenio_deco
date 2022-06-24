import React from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import { NavLink } from 'react-router-dom';

const Item = ({ item }) => {

    const divBadgeStyles = {
        top: '0.5rem',
        right: '0.5rem'
    }

  return (
    <div className="col mb-5">
        <div className="card h-100">
            {/* <!-- Sale badge--> */}
            <div className="badge bg-dark text-white position-absolute" style={divBadgeStyles}>Sale</div>
            {/* <!-- Product image--> */}
            <NavLink to={`/item/${item.id}`}><img className="card-img-top" src={item.img} alt="..." /></NavLink>
            {/* <!-- Product details--> */}
            <div className="card-body p-4">
                <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">{item.name}</h5>
                    {/* <!-- Product price--> */}
                    ${item.price}
                </div>
            </div>
            {/* <!-- Product actions--> */}
            {/* <ItemCount stock={5} initial={1}/> */}
        </div>
    </div>
  )
}

export default Item