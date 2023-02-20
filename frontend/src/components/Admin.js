import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import '../styles/Admin.css'
import Title from './Title'

const Admin = ({jwt, updateJWT}) => {
    let [messages, setMessages] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        /**
         * get all messages sent from database
         */
        let getMessages = async () => {
            if(jwt !== '') {
                let response = await fetch(`http://127.0.0.1:8000/messages`)
                let data = await response.json()
                setMessages(data.reverse())
            }
        }   

        getMessages()
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
        let response = await fetch(`http://127.0.0.1:8000/messages/delete/${messages[index]._id}`, { method: "DELETE" })

        let data = await response.json()

        if(data.msg === 'success') {
            setMessages(messages => [
                ...messages.slice(0, index),
                ...messages.slice(index + 1, messages.length)
            ])
        }
    }

    let logout = () => {
        updateJWT('')
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
        </div>
    )
}

export default Admin
