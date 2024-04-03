import React from 'react'
import useCounter from '../../../Hooks/useCounter'

const NewCounter = () => {
    const [count, increment, decrement] = useCounter(0);

    return (
        <div>

            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    )
}

export default NewCounter
