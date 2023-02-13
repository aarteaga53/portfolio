import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='profile-links'>
                    <a className='profile-link' href='https://github.com/aarteaga53' target='_blank' rel='noopener noreferrer'><i className='fa fa-github'></i></a>
                    <a className='profile-link' href='https://www.linkedin.com/in/andrew-arteaga-0b8065214/' target='_blank' rel='noopener noreferrer'><i className='fa fa-linkedin-square'></i></a>
                    <a className='profile-link' href='mailto:andrewarteaga123@gmail.com' target='_blank' rel='noopener noreferrer'><i className='fa fa-at'></i></a>
                </div>
                <p>&copy; {new Date().getFullYear()} Andrew Arteaga</p>
            </div>
        </div>
    )
}

export default Footer