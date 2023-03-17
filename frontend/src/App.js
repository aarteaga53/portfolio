import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Signin from './components/Signin'
import Admin from './components/Admin'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SlideShow from './components/SlideShow'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

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
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/signin' element={<Signin token={updateToken} />}></Route>
          <Route path='/admin' element={<Admin token={token} updateToken={updateToken} />}></Route>
          <Route path='/slideshow' element={<SlideShow />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
