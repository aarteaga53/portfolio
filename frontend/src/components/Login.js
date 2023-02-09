import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Login = ({jwt}) => {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    /**
     * login into admin page
     */
    let login = async () => {
        if(username !== '' && password !== '') {
            const user = {username: username, password: password}

            let response = await fetch(`http://127.0.0.1:8000/verify`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            let data = await response.json()
    
            if(data.msg === 'User valid.') {
                jwt(data.token)
                navigate('/admin')
            }
        }
    }

    /**
     * update the variables based on the input box that was changed
     * 
     * @param {*} e 
     */
    let handleChange = (e) => {
        switch(e.target.id) {
            case'username':
                setUsername(e.target.value)
                break
            case'password':
                setPassword(e.target.value)
                break
            default:
                break
        }
    }

    return (
        <div>
            <div className='top-panel'>
                <div className='name' onClick={() => navigate('/')}>Andrew Arteaga</div>
            </div>
            <div className="page-body">
                <div className="login-box width">
                    <div className="login-title">Welcome Andrew</div>
                    <div className="login-body">
                        <input className="contact-input" id='username' type='text' placeholder="Username" onChange={handleChange}></input>
                        <input className="contact-input" id='password' type='password' placeholder="Password" onChange={handleChange}></input>
                    </div>
                    <div className='login-buttons'>
                        <div className='button' onClick={() => navigate(-1)}>Back</div>
                        <div className='button' onClick={login}>Login</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
