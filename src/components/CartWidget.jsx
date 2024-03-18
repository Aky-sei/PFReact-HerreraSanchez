import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"

export const CartWidget = () => {
    const {getItemQuantity} = useCartContext()
    return (
        <button>
            <Link to={'./cart'} className="flex items-center">
                <svg className="h-10 w-10 text-neutral-300 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <p className="text-neutral-200 mx-1 text-3xl inline">{getItemQuantity()}</p>
            </Link>
        </button>
    )
}