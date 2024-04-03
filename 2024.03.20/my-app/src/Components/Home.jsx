import './Home.css';
import React, { Component } from 'react';
import PageHeader from './PageHeader';
import FooterPage from './FooterPage';

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="home">
                <PageHeader title="App Title" name="Mickael" />
                {this.props.text}
                {this.props.list}
                <FooterPage />
            </div>
        );
    }
}

export default Home;