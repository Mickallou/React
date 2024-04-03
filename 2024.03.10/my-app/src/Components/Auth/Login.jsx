import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='loginPage'>
            <div>
                <h1>Login</h1>
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
