import './App.css'
import React, { useState } from 'react'

function App() {
  let [color, setColor] = useState('#FFFFFF')
  let [contrast, setContrast] = useState('#000000')
  let [index, setIndex] = useState(0)
  let [style, setStyle] = useState({color: contrast, backgroundColor: color})

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

    let invert = invertHex(newColor)

    console.log(newColor)
    setColor('#' + newColor)
    setContrast('#' + invert)
    setStyle({color: '#' + newColor, backgroundColor: '#' + invert})
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

  let enter = (e) => {
    // setStyle({color: color, backgroundColor: contrast})
    setIndex(parseInt(e.target.id))
  }

  let leave = () => {
    setIndex(0)
  }

  return (
    <div>
      <div className='top-panel'>
        <div className='name' style={{color: color}} onClick={randomColor}>Andrew Arteaga</div>
        <div className='links'>
          <div className='link' id='1' style={index === 1 ? style : null} onMouseEnter={enter} onMouseLeave={leave}>Home</div>
          <div className='link' id='2' style={index === 2 ? style : null} onMouseEnter={enter} onMouseLeave={leave}>About</div>
          <div className='link' id='3' style={index === 3 ? style : null} onMouseEnter={enter} onMouseLeave={leave}>Contact</div>
        </div>
      </div>
      <div className='page-body'>
        
      </div>
    </div>
  )
}

export default App
