import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Panel from './components/Panel'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Panel />
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App
