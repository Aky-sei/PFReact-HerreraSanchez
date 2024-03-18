import { useState } from "react"


export const useNumberCounter = (min = 0, max = 10, initial = 0, step = 1) => {

    if (initial < min) {
        initial = min
    } else if (initial > max) {
        initial = max
    }

    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count + step <= max) {
            setCount(count + step)
        }
    }

    const decrement = () => {
        if (count - step >= min) {
            setCount(count - step)
        }
    }

    const reset = () => {
        setCount(initial)
    }

    return {count, increment, decrement, reset}

}