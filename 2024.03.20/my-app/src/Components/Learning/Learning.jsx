import React from 'react'
import Clock from './Clock/Clock'
import PersonalDetail from './PersonalDetail/PersonalDetail'
import PersonalDetailProps from './PersonalDetail/PersonalDetailProps'
import PresonalDetailPropsObject from './PersonalDetail/PresonalDetailPropsObject'
import PersonalDetailPropsObjTomer from './PersonalDetail/PersonalDetailPropsObjTomer'
import ClockFC from './Clock/ClockFC'
import PersonalDetailPropsFC from './PersonalDetail/PersonalDetailPropsFC'
import PersonalDetailPropsObjFC from './PersonalDetail/PersonalDetailPropsObjFC'
import ThreeClocks from './Clock/ThreeClocks'
import EventHandlingFC from './Event/EventHandlingFC'
import EventHandlingCC from './Event/EventHandlingCC'
import Counter from './Counter/Counter'

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

            <ThreeClocks />

            <EventHandlingFC />

            <EventHandlingCC />

            <Counter />
        </div>
    )
}

export default Learning
