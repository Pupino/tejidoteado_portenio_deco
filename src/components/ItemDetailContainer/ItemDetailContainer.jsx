import React, { useState, useEffect } from 'react'
import { productsData } from '../../data/products'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer({id}) {
    //constante para traer el detalle del producto
    const [item, setProduct] = useState({});

    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res(productsData[id-1]);
            }, 2000);
        });
        getItem
            .then((res) => {
                console.log(res)
                setProduct(res);
                console.log('product' + item);
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);

  return (
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
                <ItemDetail key={item.id} item={item} />
            </div>
        </div>
    </section>
  )
}

export default ItemDetailContainer