import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='profile-links'>
                    <a className='profile-link' href='https://github.com/aarteaga53' target='_blank' rel='noopener noreferrer'><GitHubIcon /></a>
                    {/* <i className='fa fa-github'></i> */}
                    <a className='profile-link' href='https://www.linkedin.com/in/andrew-arteaga-0b8065214/' target='_blank' rel='noopener noreferrer'><LinkedInIcon /></a>
                    {/* <i className='fa fa-linkedin-square'></i> */}
                    <a className='profile-link' href='mailto:andrewarteaga123@gmail.com' target='_blank' rel='noopener noreferrer'><EmailIcon /></a>
                    {/* <i className='fa fa-at'></i> */}
                </div>
                <p>&copy; {new Date().getFullYear()} Andrew Arteaga</p>
            </div>
        </div>
    )
}

export default Footer