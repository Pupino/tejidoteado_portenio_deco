import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
//import { productsData } from '../../data/products'
import { useParams } from 'react-router-dom';
import Header from '../Header'
import { getItems } from '../../services/FirebaseConfig';

export default function ItemListContainer(props) {

    const [products, setProducts] = useState([]);
    const { categoryid } = useParams();

    //getItems().then( respuesta => console.log(respuesta));

    useEffect(() => {
        // const getProducts = new Promise((res, rej) => {
        //     // console.log('llamando a la api');
        //     setTimeout(() => {
        //         if (categoryid) {
        //             res(productsData.filter(product => product.category === categoryid));
        //         } else {
        //             res(productsData);
        //         }
        //     }, 2000);
        // });
        //getProducts
        getItems()
            .then((res) => {
                //console.log(res)
                if (categoryid) {
                    setProducts(res.filter(product => product.category === categoryid));
                } else {
                    setProducts(res);
                }

            })
            .catch((error) => {
                console.log(error);
            });
        //console.log('i fire once');
    }, [categoryid]);

  return (
    <>
        {!(categoryid)
            ?<Header greeting={'DISEÑOS UNICOS'} subTitle={'hechos a mano'} headerClass={'bg-dark py-4'}/>
            :<Header greeting={categoryid} subTitle={''} headerClass={'bg-dark py-3'}/>}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-0">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <ItemList items={products}/>
                </div>
            </div>
        </section>
    </>
  )
}
