import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail({item}) {

  const [itemsToBuy, setItemsToBuy] = useState(1);

  const divBadgeStyles = {
    top: '0.5rem',
    right: '0.5rem'
  }

  function addToCart(evt, quantity) {
    setItemsToBuy(quantity);
    document.getElementById("countElement").style.display = 'none';
  }

  for (const result in item) {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* <!-- Sale badge--> */}
                <div className="badge bg-dark text-white position-absolute" style={divBadgeStyles}>Sale</div>
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={item.img} alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{item.name}</h5>
                        <div className="p-2">{item.desc}</div>
                        {/* <!-- Product price--> */}
                        ${item.price}
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <ItemCount stock={5} initial={1} onAdd={addToCart}/>
                <div id="endShop" className="text-center p-4 pt-0">
                  <button className="btn btn-outline-info p-0"><Link to="/cart" className="btn btn-outline-info active text-light">End Shop {itemsToBuy}</Link></button>
              </div>
            </div>
        </div>
    )
  }
}

export default ItemDetail