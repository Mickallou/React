import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {

    timerID = null;

    constructor(props) {
        super(props);
        this.state = { date: props.date };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className='clock'>
                <div>Clock</div>
                <div>It is {this.state.date.toLocaleTimeString()}.</div>
            </div>
        );
    }
}

export default Clock;