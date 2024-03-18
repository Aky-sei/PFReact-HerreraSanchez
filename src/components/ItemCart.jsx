import { useNumberCounter } from "../hooks/useNumberCounter"
import { useCartContext } from "../context/CartContext"
import { toast } from "react-toastify"
import { useEffect } from "react"

export const ItemCart = ({product}) => {

    const {updateItem, removeItem} = useCartContext()
    const {count, decrement, increment} = useNumberCounter(1, product.stock, product.quantity, 1)

    useEffect(() => {
        updateItem(product,count)
    },[count])

    const handleRemoveItem = () => {
        removeItem(product.id)
        toast.error(`El producto fue eliminado del carrito`, {
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
        <div className="bg-purple-900 rounded-xl p-2 w-full mb-3 flex text-purple-300">
            <picture className="h-36 overflow-hidden rounded-2xl flex w-2/5">
                <img className="self-center" src={`${product.img}`}/>
            </picture>
            <div className="h-full w-2/5 pl-3 flex items-center flex-wrap">
                <p className="w-full text-5xl">{product.name}</p>
                <p className="w-full">Precio: ${product.price * count} ({product.price} * {count})</p>
            </div>
            <div className="h-full w-1/5 flex items-center flex-wrap">
                <div className="w-full">
                    <button className="bg-teal-500 w-8 rounded-xl mx-2 text-black" onClick={decrement}>-</button>
                    <span>{count}</span>
                    <button className="bg-teal-500 w-8 rounded-xl mx-2 text-black" onClick={increment}>+</button>
                </div>
                <button className="bg-teal-500 w-24 rounded-xl mx-2 text-black" onClick={handleRemoveItem}>Eliminar</button>
            </div>
        </div>
    )
}