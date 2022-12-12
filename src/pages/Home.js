import React from 'react'

const Home = () => {
    return (
        <div className='page-body'>
            <div className='section-title'>Home</div>
            <div className='projects'>
                <div className='project' id='budget-buddy'>
                    <div>Budget Buddy</div>
                    <div className='project-icons'>
                        <a href='https://github.com/Group-Saber/saber-budget-buddy' target='_blank' rel='noopener noreferrer' className='test' id='budget-buddy'>
                            <i className='fa fa-github first-icon'></i>
                        </a>
                        <a href='http://saber.andrewarteaga.com' target='_blank' rel='noopener noreferrer' className='test' id='budget-buddy'>
                            <i className='fa fa-desktop'></i>
                        </a>
                    </div>
                </div>
                <div className='project' id='my-notes'>
                    <div>My Notes</div>
                    <div className='project-icons'>
                        <a href='https://github.com/aarteaga53/my-notes' target='_blank' rel='noopener noreferrer'  className='test' id='my-notes'>
                            <i className='fa fa-github first-icon'></i>
                        </a>
                        <a href='https://play.google.com/store/apps/details?id=com.arteagaapp.mynotes&pli=1' target='_blank' rel='noopener noreferrer'  className='test' id='my-notes'>
                            <i className='fa fa-desktop'></i>
                        </a>
                    </div>
                </div>
                <div className='project' id='portfolio'>
                    <div>Portfolio</div>
                    <div className='project-icons'>
                        <a href='https://github.com/aarteaga53/portfolio' target='_blank' rel='noopener noreferrer'  className='test' id='my-notes'>
                            <i className='fa fa-github'></i>
                        </a>
                    </div>
                </div>
                <div className='project' id='machine-learning'>
                    <div>Machine Learning</div>
                    <div className='project-icons'>
                        <a href='https://github.com/aarteaga53/facial_expression_recognition' target='_blank' rel='noopener noreferrer'  className='test' id='my-notes'>
                            <i className='fa fa-github'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
