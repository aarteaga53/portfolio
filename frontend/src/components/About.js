import React from 'react'
// import headshot from '../images/placeholder.png'

const About = () => {
    return (
        <div id='about'>
            <div className='page-body' >
                <div className='section-title'>About</div>
                {/* <img className='profile-img' src={headshot} alt='profile' /> */}
                <div className='about-sub'>Software Engineer</div>
                <div className='about-text width'>
                    I am a recent computer science graduate, looking forward to working in a new 
                    environment where I can apply my software engineering skills. By working in a new 
                    environment, I am hoping to gain new skills that can make me a better programmer. I 
                    am excited to work as part of a team where I can learn from different perspectives 
                    and work on meaningful projects.
                </div>
                <div className='skills-col width'>
                    <div className='skills-title'>Skills</div>
                    <ul className='skills'>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>Dart</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>SQL/NoSQL</li>
                        <li>Firebase</li>
                        <li>MongoDB</li>
                        <li>Django</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Flutter</li>
                        <li>PyTorch</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
