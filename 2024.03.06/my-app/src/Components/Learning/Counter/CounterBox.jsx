import React, { useState, useEffect } from 'react'

const CounterBox = (num, callback) => {
    const [number, setNumber] = useState(num)
    const [propsNum, setPropsNum] = useState(num)

    useEffect(() => {
        setPropsNum(num)
    }, [num]);

    useEffect(() => {
        if (propsNum)
            setNumber(propsNum)
    }, [propsNum])

    useEffect(() => {
        if (number) {
            callback(number)
            setPropsNum(null)
        }
    }, [number, callback]);


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
