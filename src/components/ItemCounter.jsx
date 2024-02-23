import { useNumberCounter } from "../hooks/useNumberCounter"

export const ItemCounter = ({stock}) => {
    const {count, increment, decrement} = useNumberCounter(0, stock, 1, 1)

    return (
    <div>
        <button className="bg-teal-500 h-8 w-8 rounded-xl me-2 text-black" onClick={decrement}>-</button>
        <span>{count}</span>
        <button className="bg-teal-500 h-8 w-8 rounded-xl ml-2 text-black" onClick={increment}>+</button>
    </div>
    )
}