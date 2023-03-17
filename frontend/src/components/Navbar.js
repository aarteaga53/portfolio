import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  let [color, setColor] = useState('#FFFFFF')
  let [contrast, setContrast] = useState('#000000')
  let [index, setIndex] = useState(-1)
  let [style, setStyle] = useState({color: contrast, backgroundColor: color})
  let [isActive, setIsActive] = useState(false)
  let navigate = useNavigate()
  let locate = useLocation()

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

    console.log(`Color: ${newColor}\nInverted Color: ${invert}`)
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

  /**
   * determine which button is being hovered over
   * @param {*} e 
   */
  let enter = (e) => {
    setIndex(parseInt(e.target.id))
  }

  /**
   * set hovering to none
   */
  let leave = () => {
    setIndex(-1)
  }

  /**
   * toggle hides the links when screen is too small
   */
  let showLinks = () => {
    var name = document.getElementById('name')
    var nav = document.getElementById('links')

    if (nav.style.display === 'block') {
      nav.style.display = 'none'
      name.style.display = 'block'
    } else {
      nav.style.display = 'block'
      name.style.display = 'none'
    }

    setIsActive(!isActive)
  }
  
  return (
    <>
      <div className='top-panel'>
        <div className='name' id='name' style={{color: color}} onClick={() => navigate('/signin')}>Andrew Arteaga</div>
        <div className='links' id='links'>
          <Link className='link' to='/projects' id='0' 
            style={index === 0 || locate.pathname === '/projects'  ? style : null} 
            onMouseEnter={enter} onMouseLeave={leave}
            onClick={randomColor}
          >Projects</Link>
          <Link className='link' to='/chat' id='1'
            style={index === 1 || locate.pathname === '/chat' ? style : null}
            onMouseEnter={enter} onMouseLeave={leave}
            onClick={randomColor}
          >Chat</Link>
          <Link className='link' to='/about' id='2' 
            style={index === 2 || locate.pathname === '/about'  ? style : null} 
            onMouseEnter={enter} onMouseLeave={leave}
            onClick={randomColor}
          >About</Link>
          <Link className='link' to='/contact' id='3' 
            style={index === 3 || locate.pathname === '/contact'  ? style : null} 
            onMouseEnter={enter} onMouseLeave={leave}
            onClick={randomColor}
          >Contact</Link>
        </div>
        <div className='nav-icon' onClick={showLinks}>
            {isActive ? <CloseIcon id='mui-icon' /> : <MenuIcon id='mui-icon' />}
        </div>
      </div>
    </>
  )
}

export default Navbar
