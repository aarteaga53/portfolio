import React from 'react'

const Contact = () => {
    /**
     * send a message to database
     */
    let sendMessage = async (event) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget);
        const user = { name: form.get('name'), email: form.get('email'), message: form.get('message') }

        let response = await fetch(`http://127.0.0.1:8000/message/send`, {
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
            <div className='page-body'>
                <div className='section-title'>
                    <div className='letters'>C</div>
                    <div className='letters'>o</div>
                    <div className='letters'>n</div>
                    <div className='letters'>t</div>
                    <div className='letters'>a</div>
                    <div className='letters'>c</div>
                    <div className='letters'>t</div>
                </div>
                <form className='contact-body width' onSubmit={sendMessage}>
                    <input className='contact-input' id='name' name='name' type='text' placeholder='Name' required></input>
                    <input className='contact-input' id='email' name='email' type='text' placeholder='Email' required></input>
                    <textarea className='contact-input' id='message' name='message' rows='10' placeholder='Message' required></textarea>
                    <div className='buttons'>
                        <button className='button' type='reset'>Clear</button>
                        <button className='button' type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact