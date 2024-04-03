import React, { useState, useEffect } from 'react'

//Option 1 - using default value
const ClockTZ = ({ name, timeZone = "Asia/Jerusalem" }) => {

    const [date, setDate] = useState(new Date())

    //Option 2 - using default value
    // timeZone = !timeZone ? "Asia/Jerusalem" : timeZone //! If timeZone is not provided, default to "Asia/Jerusalem" else use timeZone
    // timeZone = timeZone || "Asia/Jerusalem";
    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timerId)
    }, [])

    return (
        <div>
            <div>{name}: {date.toLocaleString("en-US", { timeZone: timeZone })}</div>
        </div>
    )
}

export default ClockTZ
