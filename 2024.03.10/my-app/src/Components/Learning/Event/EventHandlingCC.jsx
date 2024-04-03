import React, { Component } from 'react'

export default class EventHandlingCC extends Component {

    message = 'Button clicked'

    handleClick(action) {
        alert(action)
    }

    //Dont use method 2 because it creates a new function every time the component renders
    render() {
        return (
            <div>
                <button onClick={() => this.handleClick('Button Clicked')}>Class Click me 1</button>
                <button onClick={this.handleClick.bind(this)}>Class Click me 2</button>
            </div>
        )
    }
}
