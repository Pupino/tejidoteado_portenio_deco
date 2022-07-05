import { createContext, useState, useEffect } from "react";

//1. Se exporta el context para los componentes q necesiten usar su info
export const CartContext = createContext();

//2. Se crea la funcionalidad del context
export const CartProvider = ({children}) => {
    //se pueden tener estados, efectos, funciones, las cuales estaran disponibles para los children suscriptos al contexto

    const [cart, setCart] = useState([]);
    const [orderNumber, setOrderNumber] = useState();

    //Agregar item y su cantidad al carrito
    const addItem = (pItem, pCantidad) => {
        if (isInCart(pItem.id)) {
            //sumar cantidad
            //console.log('ya esta en el carrito, sumar cantidad');
            //Recorre cada item de cart y lo copia en un nuevo array, para agregar la cantidad cuando encuentre el id
			const newCart = cart.map((item) => {
				if (item.id === pItem.id) {
					const copyItem = { ...item };
					copyItem.qty += pCantidad;
					return copyItem;
				} else return item;
			});
			setCart(newCart);
            //
            /*//Find index of specific object using findIndex method.
            let objIndex = cart.findIndex((obj => obj.id === pItem.id));
            //Log object to Console.
            console.log("Before update: ", cart[objIndex]);
            let actualQty = cart[objIndex].qty;
            console.log("pCantidad: ", pCantidad);
            pCantidad = pCantidad + actualQty;
            console.log("pCantidad sumado a qty: ", pCantidad);
            //cart[objIndex].qty = pCantidad;
            //setCart([cart[objIndex].qty = pCantidad]);*/
        } else {
            setCart([...cart, { ...pItem, 'qty': pCantidad }]);
        }
    }

    //Valida si el item esta en el carrito
    const isInCart = (id) => {
        //Devuelve true o false
        return cart.some((prod) => prod.id === id);
    };

    //Remover un item del carrito usando su id
     const removeItem = (pItemId) => {
        //console.log('Removes Item');
        //hace una copia del carrito
		const cartCopy = [...cart];
        //filtra de esa copia el item que quiere remover y crea un nuevo array pulido
		const changedCart = cartCopy.filter((item) => {
			return item.id !== pItemId;
		});
        //settea el carrito con un nuevo array pulido
		setCart(changedCart);
    }

    //Remover todos los items del carrito
    const clearCart = () => {
        setCart([]);
    }

    //Cantidad total de items en el carrito
    const getTotalItems = cart.reduce((total, item) => {
        return total + item.qty;
    },0 );

    //Cantidad total de $ en el carrito
    const getTotalPrice = cart.reduce((total, item) => {
        let itemAmount = item.qty * item.price;
        return total + itemAmount;
    },0 );

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, getTotalItems, getTotalPrice, orderNumber, setOrderNumber }}>
            {children}
        </CartContext.Provider>
    );
}