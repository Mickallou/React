import React from 'react'
import useRandom from '../../../Hooks/useRandom'

const NewRandom = () => {

    const [random, generateRandom] = useRandom()

    return (
        <div>
            <h1>Random Number</h1>
            <button onClick={generateRandom}>Generate Random Number</button>
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                {random.map((num, index) => {
                    return <p style={{ fontSize: '1.2 rem', fontWeight: '600', padding: '5px' }} key={index}>{num}</p>
                }
                )}
            </div>
        </div>
    )
}

export default NewRandom
