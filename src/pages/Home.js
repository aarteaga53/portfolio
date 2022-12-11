import React from 'react'

const Home = () => {
    return (
        <div className='page-body'>
            <div className='section-title'>Home</div>
            <div className='projects'>
                <div className='project' id='budget-buddy'>
                    <div>Budget Buddy</div>
                </div>
                <div className='project' id='my-notes'>
                    <div>My Notes</div>
                </div>
                <div className='project' id='portfolio'>
                    <div>Portfolio</div>
                </div>
                <div className='project' id='machine-learning'>
                    <div>Machine Learning</div>
                </div>
            </div>
        </div>
    )
}

export default Home
