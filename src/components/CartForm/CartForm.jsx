import React, { useContext, useState } from 'react'
import { createBuyOrder } from '../../services/FirebaseConfig';
import { CartContext } from '../../context/CartContext';

function CartForm() {
    const { cart , getTotalPrice, clearCart, setOrderNumber} = useContext(CartContext);
    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: ""
      })
      const [isdisabled, setIsDisabled] = useState(true); // For Submit button

    //check if object properties are all filled
    function checkPropertiesWithValues(obj) {
        //console.log('buyer.name: ' + buyer.name);
        //console.log('buyer.phone: ' + buyer.phone);
        //console.log('buyer.email: ' + buyer.email);
        for (var key in obj) {
            //console.log('obj[key]: ' + buyer[key]);
            if (obj[key] === null || obj[key] === "")
                return true;
        }
        return false;
    }

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        //console.log(e.target.name);
        //console.log(e.target.value);
        const buyerCopy = {...buyer,
            [field]: value};
        setIsDisabled(checkPropertiesWithValues(buyerCopy));
        setBuyer({
            ...buyer,
            [field]: value //entre corchetes el campo es dinámico
        })
    }

    function hanbleBuyOrder(e){
        e.preventDefault();
        const dataOrder = {
            buyer,
            items: cart,
            total: getTotalPrice
        }
        createBuyOrder(dataOrder).then( (res) => {
            clearCart(); //vaciar carrito
            //console.log('Respuesta: ', res.id);
            setOrderNumber(res.id);
        });
    }

  return (
    <form>
        <div className="row mt-3">
            <div className="col-md">
                <div className="form-floating">
                <input name="name" type="text" className="form-control" onChange={handleChange}/>
                <label htmlFor="name">Usuario</label>
                </div>
            </div>
            <div className="col-md">
                <div className="form-floating">
                <input name="email" type="email" className="form-control" onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="col-md">
                <div className="form-floating">
                <input name="phone" type="number" className="form-control" onChange={handleChange}/>
                <label htmlFor="phone">Telefono</label>
                </div>
            </div>
        </div>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
            <div className="col mb-12 text-center">
                <button className="btn btn-success active text-light m-4" onClick={hanbleBuyOrder} disabled={isdisabled}>Finalizar Compra</button>
            </div>
        </div>
        <hr/>
    </form>
  )
}

export default CartForm