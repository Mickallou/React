import React, { useState, useEffect } from 'react'

const CounterBox = ({ num: numProps, callback }) => {
    const [number, setNumber] = useState(numProps)

    useEffect(() => {
        setNumber(numProps)
    }, [numProps])

    useEffect(() => {
        if (numProps !== number) {
            callback(number)
        }
        // eslint-disable-next-line
    }, [number])

    const handleClicked = () => {
        setNumber(Math.floor(Math.random() * 1000000) + 1)
    }

    return (
        <div>
            <div className='num'>The number is {number}</div> <br />
            <button onClick={handleClicked}>Generate Child Random Number</button>
        </div >
    )
}

export default CounterBox
