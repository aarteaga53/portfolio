import React from 'react'
import { Email, GitHub, LinkedIn, YouTube } from '@mui/icons-material'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='profile-links'>
          <a className='profile-link' href='https://github.com/aarteaga53' target='_blank' rel='noopener noreferrer'><GitHub /></a>
          <a className='profile-link' href='https://www.linkedin.com/in/andrew-arteaga-0b8065214/' target='_blank' rel='noopener noreferrer'><LinkedIn /></a>
          <a className='profile-link' href='https://www.youtube.com/@andrewarteaga6321' target='_blank' rel='noopener noreferrer'><YouTube /></a>
          <a className='profile-link' href='mailto:andrewarteaga123@gmail.com' target='_blank' rel='noopener noreferrer'><Email /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Andrew Arteaga</p>
      </div>
    </div>
  )
}

export default Footer