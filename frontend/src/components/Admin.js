import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import '../styles/Admin.css'
import Title from './Title'

const Admin = ({jwt, updateJWT}) => {
  let [messages, setMessages] = useState([])
  let [chats, setChats] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    /**
     * get all messages sent from database
     */
    let getMessages = async () => {
      if(jwt) {
        let host = process.env.REACT_APP_HOST || 'http://127.0.0.1:8000'
        let response = await fetch(`${host}/messages/${jwt}`)
        let data = await response.json()

        if(!('msg' in data)) {
            setMessages(data.reverse())
        }
      }
    }   

    let getChats = () => {
      const data = JSON.parse(window.localStorage.getItem('chats'))
      console.log(data)
      setChats(data)
    }

    getMessages()
    getChats()

    const targetNode = document.getElementById('chat-messages');
    const config = { attributes: true, childList: true, subtree: true };

    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
          targetNode.scrollTop = targetNode.scrollHeight
        } 
      }
    };
  
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
  }, [jwt])

  /**
   * Gets a date in milliseconds and converts it to the month and day,
   * adds year to the end if it is not the same as the current year
   * 
   * @param {*} date 
   * @returns the date in mm/dd or mm/dd/yyyy format
   */
  let formatDate = (date) => {
    let newDate = `${date.getMonth() + 1}/${date.getDate()}`

    if(new Date().getFullYear() !== date.getFullYear()) {
      newDate += `/${date.getFullYear()}`
    }

    return newDate
  }

  /**
   * delete a message from database
   * 
   * @param {*} index 
   */
  let deleteMessage = async (index) => {
    let host = process.env.REACT_APP_HOST || 'http://127.0.0.1:8000'
    let response = await fetch(`${host}/messages/delete/${messages[index]._id}`, { method: "DELETE" })

    let data = await response.json()

    if(data.msg === 'success') {
      setMessages(messages => [
        ...messages.slice(0, index),
        ...messages.slice(index + 1, messages.length)
      ])
    }
  }

  let logout = () => {
    updateJWT(null)
    navigate('/')
  }

  let chat = async (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const sentence = { sentence: form.get('sentence'), who: 'user' }
    
    let response = await fetch(`http://127.0.0.1:5000/chat`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(sentence)
    })
    
    let data = await response.json()
    data.who = 'bot'
    setChats(chats => [...chats, sentence, data])
    
    window.localStorage.setItem('chats', JSON.stringify(chats))
    document.getElementById('sentence').value = ''
  }

  let popup = () => {
    document.getElementById('popup').style.visibility = 'hidden'
    document.getElementById('drop').style.visibility = 'visible'
  }

  let drop = () => {
    document.getElementById('drop').style.visibility = 'hidden'
    document.getElementById('popup').style.visibility = 'visible'
  }

  return (
    <div>
      <div className='top-panel'>
        <div className='name' onClick={logout}>Andrew Arteaga</div>
      </div>
      <div className='other-body'>
        <Title title='Messages' section='section-title' />
        {messages.map((msg, index) => (
          <div className='msg-card width' key={index}>
            <div className='msg-heading'>
              <div className='msg-name'>{msg.name}</div>
              <div className='msg-date'>{formatDate(new Date(msg.date))}</div>
              <div className='icon' onClick={() => deleteMessage(index)}><DeleteIcon /></div>
            </div>
            <div className='msg-email'>{msg.email}</div>
            <pre className='msg-body'>{msg.message}</pre>
          </div>
        ))}
      </div>
      <div className='chat-body chat-header' id='drop'>
        <div className='chat-drop'>
          <div className='chat-name'>Chat</div>
          <div className='chat-up' onClick={drop}><KeyboardArrowDownIcon /></div>
        </div>
        <div className='chat-messages' id='chat-messages'>
          {chats.map((chat, index) => (<div className={chat.who === 'user' ? 'chat-text chat-right' : 'chat-text chat-left'} key={index}>{chat.sentence}</div>))}
        </div>
        <form className='chat-form' onSubmit={chat}>
          <input className='chat-input' id='sentence' name='sentence' type='text' placeholder='Send message...' autoComplete='off' required></input>
          <button className='chat-icon' type='submit'><SendIcon /></button>
        </form>
      </div>
      <div className='chat-popup chat-header' id='popup'>
        <div className='chat-name'>Chat</div>
        <div className='chat-up' onClick={popup}><KeyboardArrowUpIcon /></div>
      </div>
    </div>
  )
}

export default Admin
