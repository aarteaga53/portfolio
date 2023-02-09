import React, { useState } from 'react'

const Contact = () => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')

    /**
     * send a message to database
     */
    let sendMessage = async () => {
        if(name !== '' && email !== '' && message !== '') {
            let response = await fetch(`http://127.0.0.1:8000/message/send`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({name: name, email: email, message: message})
            })

            let data = await response.json()

            if(data.msg === 'success') {
                document.getElementById('name').value = ''
                document.getElementById('email').value = ''
                document.getElementById('message').value = ''
                setName('')
                setEmail('')
                setMessage('')
            }
            // add alert that lets you know if message was sent
        }
    }

    let handleChange = (e) => {
        switch(e.target.id) {
            case'name':
                setName(e.target.value)
                break
            case'email':
                setEmail(e.target.value)
                break
            case'message':
                setMessage(e.target.value)
                break
            default:
                break
        }
    }

    return (
        <div id='contact'>
            <div className='page-body'>
                <div className='section-title'>Contact</div>
                <div className='contact-body width'>
                    <input className='contact-input' id='name' type='text' placeholder='Name' onChange={handleChange}></input>
                    <input className='contact-input' id='email' type='text' placeholder='Email' onChange={handleChange}></input>
                    <textarea className='contact-input' id='message' rows='10' placeholder='Message' onChange={handleChange}></textarea>
                </div>
                <div className='button' onClick={sendMessage}>Send</div>
            </div>
        </div>
    )
}

export default Contact