import React from 'react'

const Title = ({title, section}) => {
  return (
    <div className={section}>
      {title.split("").map((letter, index) => (
        letter === ' ' ? 
        (<div style={{width: '10px'}} key={index}></div>) :
        (<div className='letters' key={index}>{letter}</div>)
      ))}
    </div>
  )
}

export default Title