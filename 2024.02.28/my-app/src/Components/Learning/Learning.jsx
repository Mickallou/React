import React from 'react'
import Clock from './Clock'
import PersonalDetail from './PersonalDetail'
import PersonalDetailProps from './PersonalDetailProps'
import PresonalDetailPropsObject from './PresonalDetailPropsObject'
import PersonalDetailPropsObjTomer from './PersonalDetailPropsObjTomer'
import ClockFC from './ClockFC'
import PersonalDetailPropsFC from './PersonalDetailPropsFC'
import PersonalDetailPropsObjFC from './PersonalDetailPropsObjFC'

const Learning = () => {
    return (
        <div>
            <h1>Learning</h1>
            <Clock date={new Date()} />
            <PersonalDetail />
            <PersonalDetailProps name="Fiona" phone="0584046637" email="azoulayfioan@gmail.com" />
            <PresonalDetailPropsObject name="Yacov" phone="0548961445" email="yacov@gmail.com" />
            <PersonalDetailPropsObjTomer person={{ name: "Tomer", phone: "0548961445", email: "me@gmail.com" }} />
            <ClockFC date={new Date()} />
            <PersonalDetailPropsFC name="Fiona" />
            <PersonalDetailPropsObjFC person={{ name: "Tomer", phone: "0548961445", email: "me@gmail.com" }} />
        </div>
    )
}

export default Learning
