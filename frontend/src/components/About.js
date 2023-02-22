import React, { useEffect, useRef, useState } from 'react'
import '../styles/About.css'
import Title from './Title'
import Typewriter from 'typewriter-effect'
// import headshot from '../images/placeholder.png'

const About = () => {
  let textRef = useRef()
  let [isScrolledTo, setIsScrolledTo] = useState(false)
  const skills = [
    'Java', 'Python', 'C', 'Dart', 'JavaScript', 'HTML',
    'CSS', 'Git', 'GitHub', 'SQL', 'NoSQL', 'Firebase',
    'MongoDB', 'Django', 'React.js', 'Node.js', 'Express.js',
    'Flutter', 'PyTorch', 'AWS',
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];

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
            {skills.map((skill, index) => (
              <li className='skill' key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
