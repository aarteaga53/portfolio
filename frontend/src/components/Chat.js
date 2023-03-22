import React, { useEffect, useState } from 'react'
import '../styles/Chat.css'
import SendIcon from '@mui/icons-material/Send'

const Chat = () => {
  let [chats, setChats] = useState([{ sentence: 'Hello, this is a language model based on me. You can ask me basic questions, interview questions, or other questions. I do have to warn you, I am very limited in responses.', who: 'bot' }])

  useEffect(() => {
    const targetNode = document.getElementById('chat-msg')
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

    setChats(chats => [...chats, sentence])
    document.getElementById('sentence').value = ''

    let response = await fetch(`http://127.0.0.1:5000/andrew`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(sentence)
    })
    
    let data = await response.json()
    setChats(chats => [...chats, data])
  }

  return (
    <div className='other-body'>
      <div className='glass-tile chat-tile'>
        <div className='glass'></div>
        <div className='chat-box'>
          <div className='chat-msg' id='chat-msg'>
            {chats.map((chat, index) => (
              <div className={chat.who === 'user' ? 'chat-t chat-r' : 'chat-t chat-l'} key={index}>
                {chat.sentence}
              </div>
            ))}
          </div>
          <form className='chat-f' onSubmit={chat}>
            <div className='chat-send'>
              <input className='chat-ipt' id='sentence' name='sentence' type='text' autoComplete='off' required></input>
              <button className='chat-i' type='submit'><SendIcon /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chat