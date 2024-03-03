import React from 'react'
import './PresonalDetailPropsObject.css'

const PresonalDetailPropsObject = (props) => {
    let myObject = {
        name: props.name,
        phone: props.phone,
        email: props.email
    }
    return (
        <div className='PresonalDPO'>
            <h1>Personal Detail Props Object</h1>
            <div>
                <div>Name: {myObject.name}</div>
                <div>Phone: {myObject.phone}</div>
                <div>Email: {myObject.email}</div>
            </div>
        </div>
    )
}

export default PresonalDetailPropsObject
