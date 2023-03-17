import React from 'react'
import '../styles/Contact.css'
import Title from './Title'

const Contact = () => {
  /**
   * send a message to database
   */
  let sendMessage = async (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget);
    const user = { name: form.get('name'), email: form.get('email'), message: form.get('message') }

    let host = process.env.REACT_APP_HOST || 'http://127.0.0.1:8000'
    let response = await fetch(`${host}/message/send`, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    let data = await response.json()

    if(data.msg === 'success') {
      document.getElementById('name').value = ''
      document.getElementById('email').value = ''
      document.getElementById('message').value = ''
      alert('Message successfully sent!')
    }
  }

  return (
    <div id='contact'>
      <div className='other-body'>
        <Title title='Contact' section='section-title' />
        <form className='contact-body width' onSubmit={sendMessage}>
          <input className='contact-input' id='name' name='name' type='text' placeholder='Name' required></input>
          <input className='contact-input' id='email' name='email' type='email' placeholder='Email' required></input>
          <textarea className='contact-input' id='message' name='message' rows='10' placeholder='Message' required></textarea>
          <div className='buttons'>
            <button className='button contact-btn' type='reset'>Clear</button>
            <button className='button contact-btn' type='submit'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact