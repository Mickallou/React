import React from 'react'
import './PersonalDetailProps.css'

const PersonalDetailProps = (props) => {
    return (
        <div className='PersonalDP'>
            <h1>Personal Detail Props</h1>
            <div>
                <div>Name: {props.name}</div>
                <div>Phone: {props.phone}</div>
                <div>Email: {props.email}</div>
            </div>
        </div>
    )
}

export default PersonalDetailProps
