import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import Title from './Title'

const Login = ({jwt}) => {
    let navigate = useNavigate()

    /**
     * login into admin page
     */
    let login = async (event) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget);
        const user = { username: form.get('username'), password: form.get('password') }

        let response = await fetch(`http://127.0.0.1:8000/verify`, {
            method: 'POST',
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

    return (
        <div>
            <div className='top-panel'>
                <div className='name' onClick={() => navigate('/')}>Andrew Arteaga</div>
            </div>
            <div className='other-body'>
                <Title title='Sign In' section='section-title' />
                <form className='login-box width' onSubmit={login}>
                    <Title title='Welcome Andrew' section='login-title' />
                    <div className='login-inputs'>
                        <input className='login-input' id='username' name='username' type='text' placeholder='Username'></input>
                        <input className='login-input' id='password' name='password' type='password' placeholder='Password'></input>
                    </div>
                    <div className='buttons'>
                        <button className='button' type='button' onClick={() => navigate(-1)}>Back</button>
                        <button className='button' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
