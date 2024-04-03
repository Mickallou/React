import React, { useState } from 'react'

const PersonalDetailPropsFC = (props) => {

    const [name] = useState(props.name)

    return (
        <div>
            <div>Hello {name}</div>
        </div>
    )
}

export default PersonalDetailPropsFC
