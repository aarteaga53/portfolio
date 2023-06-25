import React, { useEffect, useRef, useState } from 'react'
import '../styles/About.css'
import Title from './Title'
import Typewriter from 'typewriter-effect'
// import headshot from '../images/placeholder.png'

const About = () => {
  let textRef = useRef()
  let [isScrolledTo, setIsScrolledTo] = useState(false)
  const skills = [
    'Java', 'Python', 'C', 'Dart', 'JavaScript', 'TypeScript', 'HTML',
    'CSS', 'Git', 'GitHub', 'Bitbucket', 'Python Django', 'React.js', 'Node.js', 
    'Express.js', 'Flutter', 'PyTorch', 'SQL', 'NoSQL', 'MongoDB',
    'Firebase', 'AWS EC2', 'Linux', 'Ubuntu', 'Notion'
  ]
  const about = "I am a recent Computer Science graduate and an aspiring software engineer. I am " +
                "eager to break into the world of technology, where I can apply my skills and " +
                "make an impact, no matter how small it may be. Throughout my journey, I hope " +
                "to meet and work with people that share a similar enthusiasm, and we can learn " +
                "from each other to become better programmers. I am fascinated by what the future " +
                "of technology has to offer, and the possibility of being a part of it, gives me " +
                "much excitement."

  useEffect(() => {
    /**
     * check when the screen is scrolled to the
     *  about me page to begin typewriter effect
     */
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
      <div className='other-body' >
        <Title title='About' section='section-title' />
        {/* <img className='profile-img' src={headshot} alt='profile' /> */}
        <Title title='Software Engineer' section='about-sub' />
        <div className='glass-tile about-tile'>
          <div className='glass'></div>
          <div className='about-text' id='about-text' ref={textRef}>    
            {isScrolledTo ? (
              <Typewriter 
              onInit={(typewriter) => {
                typewriter.typeString(about)
                  .changeDelay(1)
                  .start()
                }}
                options={{
                  delay: 25,
                }}
              />
            ) : null}                 
          </div>
        </div>
        <div className='skills-col'>
          <Title title='Skills' section='skills-title' />
          <ul className='skills'>
            {skills.map((skill, index) => (
              <div className='glass-tile skill-tile'>
                <div className='glass'></div>
                <li className='skill' key={index}>{skill}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
