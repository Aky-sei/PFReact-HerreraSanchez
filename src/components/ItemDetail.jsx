import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNumberCounter } from "../hooks/useNumberCounter"

export const ItemDetail = () => {
    const [item, setItem] = useState([])
    const { pid } = useParams()
    const [tags, setTags] = useState("")
    const {count, increment, decrement, reset} = useNumberCounter(1, item.stock, 1, 1)
    const [price, setPrice] = useState("")
    
    useEffect(() => {
        if (count == 1) {
            setPrice(`$${item.price}`)
        } else {
            setPrice(`$${item.price*count} ($${item.price}*${count})`)
        }
    }, [count,item])

    useEffect(() => {
        fetch("../data/productos.json")
        .then(response => response.json())
        .then(prods => {
            const prod = prods.find(producto => producto.id == pid)
            if (prod) {
                setItem(prod)
            }
            let temp = ""
            prod.tags.forEach(element => {
                if(temp == "") {
                    temp = `${element}`
                } else {
                    temp += `, ${element}`
                }
                setTags(temp)
            })
        })
    },[pid])

    const handleAddToCart = () => {
        reset()
        console.log("Objeto añadido al carrito")
    }

    return (
        <div className="bg-purple-900 text-purple-300 rounded-2xl p-2 w-1/2 mx-auto my-20">
            <h2 className="text-4xl text-center p-2">{item.name}</h2>
            <picture className="block h-80 overflow-hidden rounded-2xl align-center mx-6 my-5 flex">
                <img className="self-center w-full" src={`../img/${item.img}`} alt=""/>
            </picture>
            <div className="mx-6 flex justify-between">
                <div className="inline-block w-2/4 pr-3">
                    <p className="text-justify mb-3">{item.description}</p>
                    <p className="mb-5">Categorias: {tags}</p>
                </div>
                <div className="inline-block w-2/4 pl-3 py-12 flex content-between flex-wrap">
                    <p className="text-xl w-full text-center">{price}</p>
                    <div className="flex justify-between w-full">
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