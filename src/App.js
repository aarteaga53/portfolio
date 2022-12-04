import './App.css'
import React, { useState } from 'react'

function App() {
  let [color, setColor] = useState('#FFFFFF')
  let [contrast, setContrast] = useState('#FFFFFF')

  /**
   * generates six random characters from a string to
   * create a hex color code
   */
  let randomColor = () => {
    const hex = '0123456789ABCDEF'
    let newColor = ''

    for(let i = 0; i < 6; i++) {
        newColor += hex.charAt(Math.floor(Math.random() * hex.length))
    }

    console.log(newColor)
    setColor('#' + newColor)
    setContrast('#' + invertHex(newColor))
  }

  /**
   * inverts the hex color
   * 
   * @param {*} hex color to invert
   * @returns inverted hex color
   */
  let invertHex = (hex) => {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substring(1)
  }

  return (
    <div>
      <div className='top-panel'>
        <div className='name' style={{color: color}} onClick={randomColor}>Andrew Arteaga</div>
        <div className='links'>
          <div className='link' style={{color: contrast}}>Home</div>
          <div className='link' style={{color: contrast}}>About</div>
          <div className='link' style={{color: contrast}}>Contact</div>
        </div>
      </div>
      <div className='page-body'>
        
      </div>
    </div>
  )
}

export default App
