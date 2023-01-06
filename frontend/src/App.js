import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Panel from './components/Panel'
import Login from './components/Login'
import Admin from './components/Admin'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Panel />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
