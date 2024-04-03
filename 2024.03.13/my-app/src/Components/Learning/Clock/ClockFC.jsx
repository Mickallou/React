// useState is a Hook that lets you add React state to function components.
// useEffect is a Hook that lets you perform side effects in function components.
import React, { useState, useEffect } from 'react'

const ClockFC = (props) => {

    const [date, setDate] = useState(props.date)

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        console.log('useEffect')
        const timerID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            console.log('clean up')
            clearInterval(timerID)
        }
    }, [ /* empty array means that the effect will only run once, after the first render */])

    return (
        <div>
            <h2>Functional Component</h2>
            <h3>It is {date.toLocaleTimeString()}.</h3>
        </div>
    )
}

export default ClockFC