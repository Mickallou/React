import React, { useState } from 'react'
import './Login.css'
import UserAuth from '../../Models/UserAuth';

const Login = () => {
    const [user, setUser] = useState(new UserAuth());

    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        const updatedUser = new UserAuth(user.email, user.password);
        updatedUser.updateField(e.target.name, e.target.value);
        setUser(updatedUser);

        console.log(updatedUser)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //Check if the email and password are correct (fake = simulation)
        if (user.email === 'me@mickaelallouche.com' && user.password === '1234') {
            setStatus('Success')
        } else {
            setStatus('Failed')
        }
    }


    return (
        <div className='loginPage'>
            <div>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan={2}><h1>Login</h1></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Email</label></td>
                                <td><input type="email" name='email' id="email" onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="password">Password</label></td>
                                <td><input type="password" name='password' id="password" onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td colSpan={2}><button type="submit" >Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <div className='status'>{status}</div>
            </div>
        </div>
    )
}

export default Login
