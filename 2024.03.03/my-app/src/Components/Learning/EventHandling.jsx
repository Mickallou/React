import React from 'react'

const EventHandling = () => {
    const handleClick = () => {
        alert('Button clicked')
    }

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default EventHandling
