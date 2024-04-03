import React from 'react'

const EventHandlingFC = () => {
    const handleClick = () => {
        alert('Button clicked')
    }
    const handleClick2 = (action) => {
        alert(action)
    }

    return (
        <div>
            <button onClick={handleClick}>Function Click me</button>
            <button onClick={() => handleClick2('Button clicked')}>Function Click me 2</button>
        </div>
    )
}

export default EventHandlingFC
