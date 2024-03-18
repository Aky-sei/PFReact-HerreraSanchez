import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from './ItemDetail.jsx'
import { getProduct } from "../firebase/firebase.js"

export const ItemDetailsContainer = () => {
    const { pid } = useParams()
    const [tags, setTags] = useState([])
    const [item, setItem] = useState([])

    useEffect(() => {
        getProduct(pid)
        .then((prod) => {
                setItem(prod)
                setTags(prod.tags)
            }).catch(error => console.log(error))
    },[pid])

    return (
        <ItemDetail item={item} tags={tags} />
    )
}