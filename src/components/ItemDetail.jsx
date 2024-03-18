import { useNumberCounter } from "../hooks/useNumberCounter"
import { Tags } from "./Tags"
import { useCartContext } from "../context/CartContext"
import { toast } from "react-toastify"

export const ItemDetail = ({item, tags}) => {
    const {addItem} = useCartContext()
    const {count, increment, decrement} = useNumberCounter(1, item.stock, 1, 1)

    const handleAddToCart = () => {
        addItem(item, count)
        toast.success(`Producto agregado al carrito correctamente`, {
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
        <div className="bg-purple-900 text-purple-300 rounded-2xl p-2 w-1/2 mx-auto my-20">
            <h2 className="text-4xl text-center p-2">{item.name}</h2>
            <picture className="block h-80 overflow-hidden rounded-2xl align-center mx-6 my-5 flex">
                <img className="self-center w-full" src={`${item.img}`} alt=""/>
            </picture>
            <div className="mx-6 flex justify-between">
                <div className="inline-block w-2/4 pr-3">
                    <p className="text-justify mb-3">{item.description}</p>
                    <p className="mb-5">Categorias: <Tags tags={tags}></Tags></p>
                </div>
                <div className="inline-block w-2/4 pl-3 py-12 flex content-between flex-wrap">
                    <p className="text-xl w-full text-center">${item.price * count} (${item.price} * {count})</p>
                    <div className="flex justify-between w-full mt-8">
                        <div>
                            <button className="bg-teal-500 h-8 w-8 rounded-xl me-2 text-black" onClick={decrement}>-</button>
                            <span>{count}</span>
                            <button className="bg-teal-500 h-8 w-8 rounded-xl ml-2 text-black" onClick={increment}>+</button>
                        </div>
                        <button className="inline bg-teal-500 h-8 w-24 rounded-xl text-black" onClick={handleAddToCart}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}