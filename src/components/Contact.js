import React from 'react'

const Contact = () => {
    return (
        <div className='page-body' id='contact'>
            <div className='section-title'>Contact</div>
            <div className='profile-links'>
                <a className='profile-link' href='https://github.com/aarteaga53' target='_blank' rel='noopener noreferrer'><i className='fa fa-github'></i> GitHub</a>
                <a className='profile-link' href='mailto:andrewarteaga123@gmail.com'><i className='fa fa-at'></i> Email</a>
                <a className='profile-link' href='tel:626-677-1809'><i className='fa fa-mobile'></i> Phone</a>
            </div>
        </div>
    )
}

export default Contact