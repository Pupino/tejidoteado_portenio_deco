import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import Header from '../Header';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, removeItem , getTotalPrice} = useContext(CartContext);

    return (
        <>
        {<Header greeting={'Carrito'} subTitle={''} headerClass={'bg-dark py-3'}/>}
        <section className="py-5 pt-2">
            <div className="container px-4 px-lg-5 mt-5">
                {cart.length !== 0 &&
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
                        <div className="col mb-12">
                            <div className="fw-bolder text-center pb-5">Importe Total: ${getTotalPrice}</div>
                        </div>
                    </div>
                }
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
					{cart.length === 0 ? (
						<span className="w-2/3 text-center m-auto block py-1 px-2 rounded bg-red-50 text-red-indigo text-xs font-medium tracking-widest">
							<p>Carrito Vacio</p>
							<Link to="/" className="nav-link">Ver Catálogo</Link>
						</span>
					):cart.map((item) => (
                        <CartItem key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} qty={item.qty} onDelete={(id) => removeItem(id)}/>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}

export default Cart