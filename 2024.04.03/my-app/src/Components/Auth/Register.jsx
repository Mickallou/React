import React, { useState } from 'react'
import UserAuth from '../../Models/UserAuth';
import './Login.css'


const Register = () => {
    const [user, setUser] = useState(new UserAuth());

    const handleChange = (e) => {
        const updatedUser = new UserAuth(user.email, user.password);
        updatedUser.updateField(e.target.name, e.target.value);
        setUser(updatedUser);

        console.log(updatedUser)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('User:', user)
    }
    return (
        <div className='loginPage'>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2}><h1>Register</h1></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input type="email" name='email' id="Remail" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td><input type="password" name='password' id="rPassword" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button type="submit" >Submit</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Register
