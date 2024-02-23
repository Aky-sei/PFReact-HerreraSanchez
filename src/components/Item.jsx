import { ItemCounter } from "./ItemCounter";
import { Link } from "react-router-dom"

export const Item = ({product}) => {

    const handleAddToCart = () => {
        console.log("a")
    }

    return (
        <div className="bg-purple-900 text-purple-300 rounded-2xl p-2">
            <picture className="block h-36 overflow-hidden rounded-2xl flex">
                <img className="self-center" src={`../img/${product.img}`} alt=""/>
            </picture>
            <h2 className="text-4xl">{product.name}</h2>
            <div className="flex justify-between my-2">
                <p className="text-xl">${product.price}</p>
                <Link className="inline" to={`/item/${product.id}`}>
                    <button className="bg-teal-500 h-8 w-24 rounded-xl text-black">Ver más</button>
                </Link>
            </div>
            <div className="flex justify-between">
                <ItemCounter stock={product.stock}/>
                <button className="inline bg-teal-500 h-8 w-24 rounded-xl text-black" onClick={handleAddToCart}>Comprar</button>
            </div>
        </div>
    )
}