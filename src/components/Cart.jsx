import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { ItemList } from "./ItemList"
import { toast } from "react-toastify"

export const Cart = () => {

    const {cart, totalPrice, emptyCart} = useCartContext()

    const handleEmptyCart = () => {
        emptyCart()
        toast.error(`Todos los elementos del carrito fueron eliminados`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
    }

    return (
        <div className="flex">
            <div className="w-2/3">
                { cart.length == 0 ? 
                <p className="bg-purple-900 rounded-xl mx-3 text-purple-300 text-5xl p-3">El carrito esta vacio</p> :
                <div className="mx-3 flex flex-wrap">
                    <ItemList products={cart} type={"Cart"}></ItemList>
                </div>}
            </div>
            <div className="w-1/3">
                <div className="bg-purple-900 h-48 mx-3 rounded-xl flex flex-wrap content-around">
                    <p className="w-full text-center text-purple-300">TOTAL DEL CARRITO:</p>
                    <p className="w-full text-center text-purple-300">${totalPrice()}</p>
                    <div className="w-full flex justify-around">
                        <Link className="inline-block p-1 bg-teal-500 rounded-xl mx-3" to={'../'}>Continuar comprando</Link>
                        { cart.length !== 0 ?
                        <Link className="inline-block p-1 bg-teal-500 rounded-xl mx-3" to={'../checkout'}>Confirmar compra</Link> 
                        : <></>}
                    </div>
                </div>
                <div className="flex">
                    { cart.length !== 0 ?
                    <button className="m-auto p-1 bg-teal-500 rounded-xl my-2" onClick={handleEmptyCart}>Vaciar carrito</button>
                    : <></>}
                </div>
            </div>
        </div>
    )
}