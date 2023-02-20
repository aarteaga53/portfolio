import React, { useEffect, useRef, useState } from 'react'
import '../styles/About.css'
import Title from './Title'
import Typewriter from 'typewriter-effect'
// import headshot from '../images/placeholder.png'

const About = () => {
    let textRef = useRef()
    let [isScrolledTo, setIsScrolledTo] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            console.log('entry.isIntersecting', entry.isIntersecting)
            const element = document.getElementById('about-text')
            console.log(element)

            if(entry.isIntersecting) {
                setIsScrolledTo(true)
            }
        })

        observer.observe(textRef.current)
    }, [])

    return (
        <div id='about'>
            <div className='page-body' >
                <Title title='About' section='section-title' />
                {/* <img className='profile-img' src={headshot} alt='profile' /> */}
                <Title title='Software Engineer' section='about-sub' />
                <div className='about-text width' id='about-text' ref={textRef}>
                    {/* I am a recent Computer Science graduate and an aspiring software engineer. I am 
                    eager to break into the world of technology, where I can apply my skills and 
                    make an impact, no matter how small it may be. Throughout my journey, I hope 
                    to meet and work with people that share a similar enthusiasm, and we can learn 
                    from each other to become better programmers. I am fascinated by what the future 
                    of technology has to offer, and the possibility of being a part of it, gives me 
                    much excitement. */}       
                    {isScrolledTo ? (
                        <Typewriter 
                            onInit={(typewriter) => {
                                typewriter.typeString("I am a recent Computer Science graduate and an aspiring software engineer. I am " +
                                "eager to break into the world of technology, where I can apply my skills and " +
                                "make an impact, no matter how small it may be. Throughout my journey, I hope " +
                                "to meet and work with people that share a similar enthusiasm, and we can learn " +
                                "from each other to become better programmers. I am fascinated by what the future " +
                                "of technology has to offer, and the possibility of being a part of it, gives me " +
                                "much excitement.")
                                .changeDelay(1)
                                .start()
                            }}
                            options={{
                                delay: 25,
                            }}
                        />
                    ) : null}                 
                </div>
                <div className='skills-col width'>
                    <Title title='Skills' section='skills-title' />
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
