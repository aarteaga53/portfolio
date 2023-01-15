import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Panel from './components/Panel'
import Login from './components/Login'
import Admin from './components/Admin'

function App() {
  let [jwt, setJWT] = useState('')

  useEffect(() => {
    /**
     * keeps user logged in
     */
    let getJWT = () => {
      const data = window.localStorage.getItem('jwt');
  
      if(data !== null) {
        setJWT(JSON.parse(data));
      }
    }

    getJWT()
  }, [])

  /**
   * sets the new jwt and stores in the window
   * @param {*} newJWT 
   */
  let updateJWT = (newJWT) => {
    window.localStorage.setItem('jwt', JSON.stringify(newJWT));
    setJWT(newJWT)
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Panel />}></Route>
          <Route path='/login' element={<Login jwt={updateJWT} />}></Route>
          <Route path='/admin' element={<Admin jwt={jwt} updateJWT={updateJWT} />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
