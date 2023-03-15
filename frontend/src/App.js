import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'
import Admin from './components/Admin'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SlideShow from './components/SlideShow'

function App() {
  let [jwt, setJWT] = useState(null)

  useEffect(() => {
    /**
     * keeps user logged in
     */
    let getJWT = () => {
      const data = window.localStorage.getItem('jwt');
  
      if(data) {
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
          <Route path='/' element={<Navbar />}></Route>
          <Route path='/signin' element={<Signin jwt={updateJWT} />}></Route>
          <Route path='/admin' element={<Admin jwt={jwt} updateJWT={updateJWT} />}></Route>
          <Route path='/slideshow' element={<SlideShow />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
