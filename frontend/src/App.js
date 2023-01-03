import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Panel from './components/Panel'
import Login from './components/Login'
import Account from './components/Account'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Panel />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/account' element={<Account />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
