import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Header from '../Header';
import { productsData } from '../../data/products'
import { useParams } from 'react-router-dom';

export default function ItemListContainer(props) {

    const [products, setProducts] = useState([]);
    const { categoryid } = useParams();

    useEffect(() => {
        const getProducts = new Promise((res, rej) => {
            console.log('llamando a la api');
            setTimeout(() => {
                res(productsData);
            }, 2000);
        });
        getProducts
            .then((res) => {
                //console.log(res)
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log('i fire once');
    }, []);

  return (
    <>
        <Header greeting={'DiSEñOs uNiCoS'} subTitle={'hechos a mano'}/>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <ItemList items={products}/>
                </div>
            </div>
        </section>
    </>
  )
}
