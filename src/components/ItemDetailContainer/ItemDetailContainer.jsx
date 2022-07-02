import React, { useState, useEffect } from 'react';
//import { productsData } from '../../data/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Header from '../Header'
import { traerProducto } from '../../services/FirebaseConfig';

function ItemDetailContainer() {
    //constante para traer el detalle del producto
    const [item, setProduct] = useState({});
    const [isError, setIsError] = useState(false);

    let { id } = useParams();

    useEffect(() => {
        // let ItemFound = productsData.find(element => element.id === parseInt(id));
        // const getItem = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         //res(productsData[itemId]);
        //         res(ItemFound);
        //     }, 500);
        // });
        traerProducto(id)
            .then((res) => {
                //console.log('respuesta ' + res)
                setProduct(res);
                //console.log('product' + item);
            })
            .catch((error) => {
                console.log(error);
                setIsError(true);
            });
    },[id]);

  return (
    <>
    {(id) && <Header greeting={item.category} subTitle={''} headerClass={'bg-dark py-3'}/>}
    <section className="py-5 pt-2">
        <div className="container px-4 px-lg-5 mt-0">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
                {isError && <Header greeting={'Producto no Encontrado'} subTitle={''} headerClass={'bg-dark py-3'}/>}
                {item.id && <ItemDetail key={item.id} item={item}/>}
            </div>
        </div>
    </section>
    </>
  )
}

export default ItemDetailContainer