import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let login = () => {
        if(email !== '' && password !== '') {
            navigate('/account')
        }
    }

    let handleChange = (e) => {
        switch(e.target.id) {
            case'email':
                setEmail(e.target.value)
                break
            case'password':
                setPassword(e.target.value)
                break
            default:
                break
        }
    }

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-title">Login</div>
                <div className="login-body">
                    <input className="contact-input" id='email' type='text' placeholder="Email" onChange={handleChange}></input>
                    <input className="contact-input" id='password' type='password' placeholder="Password" onChange={handleChange}></input>
                </div>
                <div className='button' onClick={() => navigate(-1)}>Back</div>
                <div className='button' onClick={login}>Login</div>
            </div>
        </div>
    )
}

export default Login
