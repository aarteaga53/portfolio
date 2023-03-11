import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'
import Admin from './components/Admin'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  let [token, setToken] = useState(null)

  useEffect(() => {
    /**
     * keeps user logged in
     */
    let getToken = () => {
      const data = window.localStorage.getItem('token');
  
      if(data) {
        setToken(JSON.parse(data));
      }
    }

    getToken()
  }, [])

  /**
   * sets the new jwt token and stores in the window
   * @param {*} newToken 
   */
  let updateToken = (newToken) => {
    window.localStorage.setItem('token', JSON.stringify(newToken));
    setToken(newToken)
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Navbar />}></Route>
          <Route path='/signin' element={<Signin token={updateToken} />}></Route>
          <Route path='/admin' element={<Admin token={token} updateToken={updateToken} />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
