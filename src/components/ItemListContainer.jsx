import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        fetch("../data/productos.json")
        .then(response => response.json())
        .then(prods => {
            if (cid) {
                let temp = prods.filter(prod => prod.tags.includes(cid))
                setProducts(temp)
            } else {
                setProducts(prods)
            }
        })
        .catch((error) => console.log(error))
    }, [cid])

    return (
        <div className="m-3 grid grid-cols-5 gap-8">
            <ItemList products={products}/>
        </div>
    )
}