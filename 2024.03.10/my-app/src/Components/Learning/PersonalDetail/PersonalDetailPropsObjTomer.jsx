import React from 'react'
import './PersonalDetailPropsObjTomer.css'

const PersonalDetailPropsObjTomer = (props) => {
    return (
        <div className='PropsTomer'>
            <h1>Personal Detail Props Object Tomer</h1>
            <div className='PersonDPOT'>
                <div>Name: {props.person.name}</div>
                <div>Phone: {props.person.phone}</div>
                <div>Email: {props.person.email}</div>
            </div>
        </div>
    )
}

export default PersonalDetailPropsObjTomer
