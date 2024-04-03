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
import NewCounter from './Training-Hooks/NewCounter'
import NewRandom from './Training-Hooks/NewRandom'

const Learning = () => {
    return (
        <div>
            <h1>Learning</h1>

            <Clock date={new Date()} />

            <hr style={{ marginTop: '15px' }} />

            <PersonalDetail />

            <hr style={{ marginTop: '15px' }} />

            <PersonalDetailProps name="Fiona" phone="0584046637" email="azoulayfioan@gmail.com" />

            <hr style={{ marginTop: '15px' }} />

            <PresonalDetailPropsObject name="Yacov" phone="0548961445" email="yacov@gmail.com" />

            <hr style={{ marginTop: '15px' }} />

            <PersonalDetailPropsObjTomer person={{ name: "Tomer", phone: "0548961445", email: "me@gmail.com" }} />

            <hr style={{ marginTop: '15px' }} />

            <ClockFC date={new Date()} />

            <hr style={{ marginTop: '15px' }} />

            <PersonalDetailPropsFC name="Fiona" />

            <hr style={{ marginTop: '15px' }} />

            <PersonalDetailPropsObjFC person={{ name: "Tomer", phone: "0548961445", email: "me@gmail.com" }} />

            <hr style={{ marginTop: '15px' }} />

            <ThreeClocks />

            <hr style={{ marginTop: '15px' }} />

            <EventHandlingFC />

            <hr style={{ marginTop: '15px' }} />

            <EventHandlingCC />

            <hr style={{ marginTop: '15px' }} />

            <Counter />

            <hr style={{ marginTop: '15px' }} />

            <NewCounter />

            <hr style={{ marginTop: '15px' }} />

            <NewRandom />

            <hr style={{ marginTop: '15px' }} />

        </div>
    )
}

export default Learning
