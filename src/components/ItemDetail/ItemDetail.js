import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function ItemDetail({item}) {
  const { addItem, isInCart, removeItem } = useContext(CartContext);
  const [itemsToBuy, setItemsToBuy] = useState(0);

  const divBadgeStyles = {
    top: '0.5rem',
    right: '0.5rem'
  }

  function addToCart(evt, quantity) {
    setItemsToBuy(quantity);
    addItem(item, quantity);
  }

  function removeItemFromItem (){
    removeItem(item.id);
    setItemsToBuy(0);
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
                    <div className="card-body p-4 pb-2">
                        <div className="text-center">
                            {/* <!-- Product name--> */}
                            <h5 className="fw-bolder">{item.name}</h5>
                            <div className="p-2">{item.desc}</div>
                            {/* <!-- Product price--> */}
                            ${item.price}
                        </div>
                    </div>
                    {/* <!-- Product actions--> */}
                    {itemsToBuy === 0 ?
                      <ItemCount stock={5} initial={1} onAdd={addToCart}/>
                      :
                      <Link to="/cart" className="btn btn-outline-info active text-light m-4 mt-0">Terminar mi Compra</Link>
                    }
                    {isInCart(item.id) &&
                      <button className="btn btn-outline-danger active text-light m-4 mt-0" onClick={removeItemFromItem}>Remover Item</button>
                    }
                </div>
            </div>
    )
  }
}

export default ItemDetail