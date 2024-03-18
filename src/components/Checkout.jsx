import { useRef } from "react"
import { useCartContext } from "../context/CartContext.jsx"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js"

export const Checkout = () => {
    const navigate = useNavigate()
    const formRef = useRef()
    const { cart, totalPrice, emptyCart } = useCartContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current)
        const cliente = Object.fromEntries(datForm)
        const aux = [...cart]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) {
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD)
                } else {
                    toast.info(`El producto con el nombre ${prod.title} no puede continuar con la compra ya que no posee stock suficiente`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                    aux.filter(prod => prod.id != prodBDD.id)
                }

            })

        })

        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-PE', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`Muchas gracias por su compra por un total de: $${totalPrice()}. Los productos comprados llegarán a su correo en breve`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })

                emptyCart()
                e.target.reset()
                navigate('/')
            })
            .catch(e => {
                toast.error(`Error al generar orden de compra: ${e}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            })
    }
    
    return (
        <div className="max-w-md mx-auto p-6 mt-2 bg-purple-900 rounded-md">
            <form action="" ref={formRef} onSubmit={handleSubmit}>
                <label className="mb-1 text-purple-300">Nombre: 
                    <input type="text" className="w-full p-2 mb-3 rounded-md text-purple-900" name="nombre" />
                </label>
                <label className="mb-1 text-purple-300">Apellido: 
                    <input type="text" className="w-full p-2 mb-3 rounded-md text-purple-900" name="apellido" />
                </label>
                <label className="mb-1 text-purple-300">DNI: 
                    <input type="number" className="w-full p-2 mb-3 rounded-md text-purple-900" name="dni" />
                </label>
                <label className="mb-1 text-purple-300">Email: 
                    <input type="email" className="w-full p-2 mb-3 rounded-md text-purple-900" name="email" />
                </label>
                <label className="mb-1 text-purple-300">Telefono: 
                    <input type="number" className="w-full p-2 mb-5 rounded-md text-purple-900" name="telefono" />
                </label>
                <button type="submit" className="w-full p-2 bg-purple-300 text-purple-900 rounded-md">Finalizar</button>
            </form>
        </div>
    )
}