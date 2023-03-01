import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='profile-links'>
          <a className='profile-link' href='https://github.com/aarteaga53' target='_blank' rel='noopener noreferrer'><GitHubIcon /></a>
          <a className='profile-link' href='https://www.linkedin.com/in/andrew-arteaga-0b8065214/' target='_blank' rel='noopener noreferrer'><LinkedInIcon /></a>
          <a className='profile-link' href='https://www.youtube.com/@andrewarteaga6321' target='_blank' rel='noopener noreferrer'><YouTubeIcon /></a>
          <a className='profile-link' href='mailto:andrewarteaga123@gmail.com' target='_blank' rel='noopener noreferrer'><EmailIcon /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Andrew Arteaga</p>
      </div>
    </div>
  )
}

export default Footer