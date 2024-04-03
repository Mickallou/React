import React from 'react'
import ClockTZ from './ClockTZ'

const ThreeClocks = () => {
    return (
        <div>
            <ClockTZ name="Jerusalem" />
            <ClockTZ name="New York" timeZone="America/New_York" />
            <ClockTZ name="London" timeZone="Europe/London" />
        </div>
    )
}

export default ThreeClocks
