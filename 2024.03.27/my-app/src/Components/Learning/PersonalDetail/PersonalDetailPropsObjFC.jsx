import React, { useState } from 'react'

const PersonalDetailPropsObjFC = (props) => {

    const person = useState(props.person)

    return (
        <div>
            <h1>Personal Detail Props Object Tomer</h1>
            <div>
                <div>Name: {person.name}</div>
                <div>Phone: {person.phone}</div>
                <div>Email: {person.email}</div>
            </div>
        </div>
    )
}

export default PersonalDetailPropsObjFC
