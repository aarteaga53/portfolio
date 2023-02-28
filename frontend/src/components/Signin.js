import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Signin.css'
import Title from './Title'

const Signin = ({jwt}) => {
    let navigate = useNavigate()

    /**
     * signin to admin page
     */
    let signin = async (event) => {
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
                <form className='signin-box width' onSubmit={signin}>
                    <Title title='Welcome Andrew' section='signin-title' />
                    <div className='signin-inputs'>
                        <input className='signin-input' id='username' name='username' type='text' placeholder='Username'></input>
                        <input className='signin-input' id='password' name='password' type='password' placeholder='Password'></input>
                    </div>
                    <div className='buttons'>
                        <button className='button' type='button' onClick={() => navigate(-1)}>Back</button>
                        <button className='button' type='submit'>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin