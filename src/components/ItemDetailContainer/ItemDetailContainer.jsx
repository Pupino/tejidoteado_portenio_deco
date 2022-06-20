import React, { useState, useEffect } from 'react';
import { productsData } from '../../data/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    //constante para traer el detalle del producto
    const [item, setProduct] = useState({});
    let { id } = useParams();

    useEffect(() => {
        let ItemFound = productsData.find(element => element.id === parseInt(id));
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                //res(productsData[itemId]);
                res(ItemFound);
            }, 500);
        });
        getItem
            .then((res) => {
                console.log(res)
                setProduct(res);
                //console.log('product' + item);
            })
            .catch((error) => {
                console.log(error);
            });
    },[id]);

  return (
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
                <ItemDetail key={item.id} item={item}/>
            </div>
        </div>
    </section>
  )
}

export default ItemDetailContainer