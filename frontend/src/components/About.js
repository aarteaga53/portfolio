import React from 'react'
// import headshot from '../images/placeholder.png'

const About = () => {
    return (
        <div id='about'>
            <div className='page-body' >
                <div className='section-title'>
                    <div className='letters'>A</div>
                    <div className='letters'>b</div>
                    <div className='letters'>o</div>
                    <div className='letters'>u</div>
                    <div className='letters'>t</div>
                </div>
                {/* <img className='profile-img' src={headshot} alt='profile' /> */}
                <div className='about-sub'>
                    <div className='letters'>S</div>
                    <div className='letters'>o</div>
                    <div className='letters'>f</div>
                    <div className='letters'>t</div>
                    <div className='letters'>w</div>
                    <div className='letters'>a</div>
                    <div className='letters'>r</div>
                    <div className='letters'>e</div>
                    <div style={{width: '10px'}}></div>
                    <div className='letters'>E</div>
                    <div className='letters'>n</div>
                    <div className='letters'>g</div>
                    <div className='letters'>i</div>
                    <div className='letters'>n</div>
                    <div className='letters'>e</div>
                    <div className='letters'>e</div>
                    <div className='letters'>r</div>
                </div>
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
                        <li className='skill'>Java</li>
                        <li className='skill'>Python</li>
                        <li className='skill'>C</li>
                        <li className='skill'>Dart</li>
                        <li className='skill'>JavaScript</li>
                        <li className='skill'>HTML</li>
                        <li className='skill'>CSS</li>
                        <li className='skill'>Git</li>
                        <li className='skill'>GitHub</li>
                        <li className='skill'>SQL</li>
                        <li className='skill'>NoSQL</li>
                        <li className='skill'>Firebase</li>
                        <li className='skill'>MongoDB</li>
                        <li className='skill'>Django</li>
                        <li className='skill'>React.js</li>
                        <li className='skill'>Node.js</li>
                        <li className='skill'>Express.js</li>
                        <li className='skill'>Flutter</li>
                        <li className='skill'>PyTorch</li>
                        <li className='skill'>AWS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
