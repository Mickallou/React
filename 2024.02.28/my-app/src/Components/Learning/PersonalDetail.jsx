import React, { Component } from 'react';
import './PersonalDetail.css';

class PersonalDetail extends Component {

    render() {
        return (
            <div className='personal_details'>
                <h1>Personal Detail</h1>
                <div>
                    <div>Name: Mickael Allouche</div>
                    <div>Phone: 0545266983</div>
                    <div>Email: allouchemicka@gmail.com</div>
                </div>
            </div>
        );
    }
}

export default PersonalDetail;
