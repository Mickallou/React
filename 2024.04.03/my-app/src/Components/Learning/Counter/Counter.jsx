import React, { useState } from 'react'
import CounterBox from './CounterBox'
import './Counter.css'


const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [random, setRandom] = useState(Math.floor(Math.random() * 100) + 1)

    const handleGenerateRandomNumber = ranNumber => {
        setRandom(ranNumber)
    }

    function counterPlus() {
        setCounter(counter + 1)
    }
    function counterMinus() {
        setCounter(counter - 1)
    }
    function counterReste() {
        setCounter(0)
    }
    function changeRandom() {
        setRandom(Math.floor(Math.random() * 100) + 1)
    }
    return (
        <div>
            <div className="divCounter">
                <div className="theCounter">The Counter this {counter}</div>
                <div>
                    <button onClick={counterPlus}>+</button>
                    <button onClick={counterMinus}>-</button>
                    <button onClick={counterReste}>Reste</button>
                </div>
            </div>
            <div className="divRandom">
                <div className="random">The Random Number is {random}</div>
                <button onClick={changeRandom}>Random</button>
            </div>
            <CounterBox num={random} callback={handleGenerateRandomNumber} />
        </div >
    )
}

export default Counter
