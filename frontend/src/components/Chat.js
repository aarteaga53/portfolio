import React, { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import '../styles/Chat.css'

const Chat = () => {
  let [chats, setChats] = useState([])

  useEffect(() => {
    const targetNode = document.getElementById('chat-messages')
    const config = { attributes: true, childList: true, subtree: true }

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
    observer.observe(targetNode, config)
  }, [])

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
      <div className='chat-body chat-header' id='drop'>
        <div className='chat-drop'>
          <div className='chat-name'>Chat</div>
          <div className='chat-up' onClick={drop}><KeyboardArrowDownIcon /></div>
        </div>
        <div className='chat-messages' id='chat-messages'>
          {chats.map((chat, index) => (<div className={chat.who === 'user' ? 'chat-text chat-right' : 'chat-text chat-left'} key={index}>{chat.sentence}</div>))}
        </div>
        <form className='chat-form' onSubmit={chat}>
          <input className='chat-input' id='sentence' name='sentence' type='text' autoComplete='off' required></input>
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

export default Chat