import React from 'react'
import headshot from '../images/placeholder.png'

const About = () => {
    return (
        <div id='about'>
            <div className='page-body' >
                <div className='section-title'>About</div>
                <img className='profile-img' src={headshot} alt='profile' />
                <div className='about-sub'>Software Engineer</div>
                <div className='about-text'>
                    I am a recent computer science graduate, looking forward to working in a new 
                    environment where I can apply my software engineering skills. By working in a new 
                    environment, I am hoping to gain new skills that can make me a better programmer. I 
                    am excited to work as part of a team where I can learn from different perspectives 
                    and work on meaningful projects.
                </div>
            </div>
        </div>
    )
}

export default About
