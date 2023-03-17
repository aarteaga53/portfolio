import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import SendIcon from '@mui/icons-material/Send'

const Home = () => {
  let [chats, setChats] = useState([{ sentence: 'Hello, this is a language model based on me. You can ask me basic questions, interview questions, or other questions, but I have to warn I am very limited in responses.', who: 'bot' }])

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
    
    let response = await fetch(`http://127.0.0.1:5000/andrew`, {
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

  return (
    <div className='other-body'>
      <div className='chat-box'>
        <div className='chat-msg' id='chat-msg'>
          {chats.map((chat, index) => (
            <div className={chat.who === 'user' ? 'chat-t chat-r' : 'chat-t chat-l'} key={index}>
              {chat.sentence}
            </div>
          ))}
        </div>
        <form className='chat-f' onSubmit={chat}>
          <input className='chat-ipt' id='sentence' name='sentence' type='text' autoComplete='off' required></input>
          <button className='chat-i' type='submit'><SendIcon /></button>
        </form>
      </div>
    </div>
  )
}

export default Home