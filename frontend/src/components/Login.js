import React from 'react'
import { useNavigate } from 'react-router-dom'

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
                <form className='login-box width' onSubmit={login}>
                    <div className='login-title'>
                        <div className='letters'>W</div>
                        <div className='letters'>e</div>
                        <div className='letters'>l</div>
                        <div className='letters'>c</div>
                        <div className='letters'>o</div>
                        <div className='letters'>m</div>
                        <div className='letters'>e</div>
                        <div style={{width: '10px'}}></div>
                        <div className='letters'>A</div>
                        <div className='letters'>n</div>
                        <div className='letters'>d</div>
                        <div className='letters'>r</div>
                        <div className='letters'>e</div>
                        <div className='letters'>w</div>
                    </div>
                    <div className='login-input'>
                        <input className='contact-input' id='username' name='username' type='text' placeholder='Username'></input>
                        <input className='contact-input' id='password' name='password' type='password' placeholder='Password'></input>
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
