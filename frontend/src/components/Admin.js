import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import '../styles/Admin.css'
import Title from './Title'
import PopupChat from './PopupChat'

const Admin = ({token, updateToken}) => {
  let [messages, setMessages] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    /**
     * get all messages sent from database
     */
    let getMessages = async () => {
      if(token) {
        let host = process.env.REACT_APP_HOST || 'http://127.0.0.1:8000'
        let response = await fetch(`${host}/messages/${token}`)
        let data = await response.json()

        if(!('msg' in data)) {
            setMessages(data.reverse())
        }
      }
    }   

    getMessages()
  }, [token])

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
    updateToken(null)
    navigate('/')
  }

  return (
    <div>
      <div className='top-panel'>
        <div className='name' onClick={logout}>Andrew Arteaga</div>
      </div>
      <div className='other-body'>
        <Title title='Messages' section='section-title' />
        {messages.map((msg, index) => (
          <div className='glass-tile msg-tile width' key={index}>
            <div className='glass'></div>
            <div className='msg-card'>
              <div className='msg-heading'>
                <div className='msg-name'>{msg.name}</div>
                <div className='msg-date'>{formatDate(new Date(msg.date))}</div>
                <div className='icon' onClick={() => deleteMessage(index)}><DeleteIcon /></div>
              </div>
              <div className='msg-email'>{msg.email}</div>
              <pre className='msg-body'>{msg.message}</pre>
            </div>
          </div>
        ))}
      </div>
      <PopupChat />
    </div>
  )
}

export default Admin
