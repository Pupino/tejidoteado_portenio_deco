import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({item}) {

  const divBadgeStyles = {
    top: '0.5rem',
    right: '0.5rem'
  }

  for (const result in item) {
    return (
        <div class="col mb-5">
            <div class="card h-100">
                {/* <!-- Sale badge--> */}
                <div class="badge bg-dark text-white position-absolute" style={divBadgeStyles}>Sale</div>
                {/* <!-- Product image--> */}
                <img class="card-img-top" src={item.img} alt="..." />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                    <div class="text-center">
                        {/* <!-- Product name--> */}
                        <h5 class="fw-bolder">{item.name}</h5>
                        <div className="p-2">{item.desc}</div>
                        {/* <!-- Product price--> */}
                        ${item.price}
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <ItemCount stock={5} initial={1}/>
            </div>
        </div>
    )
  }
}

export default ItemDetail