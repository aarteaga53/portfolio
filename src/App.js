import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Panel from './components/Panel'

function App() {
  return (
    <Router>
      <div>
        {/* <Panel /> */}
        <Routes>
          <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
          <Route path='/*' element={<Panel />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
