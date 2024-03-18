import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const Cartprovider = (props) => {
    
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            updateItem(item, cantidad)
        } else {
            setCart([...cart, {...item, quantity: cantidad}])
        }
    }
    
    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }
    
    const emptyCart = () => {
        setCart([])
    }

    const updateItem = (item, cantidad) => {
        let aux = [...cart]
        aux[aux.findIndex(prod => prod.id === item.id)].quantity = cantidad
        setCart(aux)
    }

    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.quantity * prod.price), 0)
    }

    return ( 
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, emptyCart, updateItem, getItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )
}