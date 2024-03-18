import { Link } from "react-router-dom"

export const Item = ({product}) => {

    return (
        <Link to={product.stock !== 0 ? `/item/${product.id}` : `#`} className="relative bg-purple-900 text-purple-300 rounded-2xl p-2">
            { product.stock == 0 ? <img className="absolute z-20" src="https://firebasestorage.googleapis.com/v0/b/coderhouse-reactjs-94976.appspot.com/o/Agotado.png?alt=media&token=59926f3a-0786-4d2e-a3ba-6810318f8b56"></img> : <></>}
            <picture className="block h-36 overflow-hidden rounded-2xl flex">
                <img className="self-center" src={`${product.img}`} alt=""/>
            </picture>
            <h2 className="text-4xl">{product.name}</h2>
            <div className="flex justify-between mb-2 mt-4">
                <p className="text-xl">${product.price}</p>
                <button className="inline bg-teal-500 h-8 w-24 rounded-xl text-black">Stock: {product.stock}</button>
            </div>
        </Link>
    )
}