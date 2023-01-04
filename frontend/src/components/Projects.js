import React from 'react'
import Project from '../components/Project'
import budgetBuddy from '../images/budgetbuddy.png'
import myNotes from '../images/list.jpg'
import porftolio from '../images/portfolio.png'
import machine from '../images/machine.png'

const Projects = () => {
    return (
        <div id='projects'>
            <div className='page-body'>
                <div className='section-title'>Projects</div>
                <div className='projects'>
                    <Project 
                        image={budgetBuddy} 
                        title='Budget Buddy' 
                        git='https://github.com/Group-Saber/saber-budget-buddy' 
                        web='http://saber.andrewarteaga.com'
                        text='Web applicaton to keep track of your budget and debts.' 
                    />
                    <Project 
                        image={myNotes} 
                        title='My Notes' 
                        git='https://github.com/aarteaga53/my-notes' 
                        web='https://play.google.com/store/apps/details?id=com.arteagaapp.mynotes&pli=1' 
                        text='Mobile application to store and organize school notes.'
                    />
                    <Project 
                        image={porftolio}
                        title='Portfolio' 
                        git='https://github.com/aarteaga53/portfolio' 
                        web='http://andrewarteaga.com'
                        text='Web application to showcase my projects.'
                    />
                    <Project 
                        image={machine}
                        title='Machine Learning' 
                        git='https://github.com/aarteaga53/facial_expression_recognition'
                        web='https://www.kaggle.com/competitions/cs4210-summer2022-assignment-2/leaderboard'
                        text='Facial expression recognition model using PyTorch.'
                    />
                    {/* <Project 
                        title='Team Website' 
                        git='https://github.com/Group-Saber/team_site' 
                        web='http://cs480-projects.github.io/teams-fall2022/Saber/index.html'
                        text='Team members that I worked with on Budget Buddy.'
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Projects
