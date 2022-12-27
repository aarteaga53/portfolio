import React from 'react'
import Project from '../components/Project'
import budgetBuddy from '../images/budget-buddy.jpg'
import myNotes from '../images/mynotes.png'

const Home = () => {
    return (
        <div className='home-body' id='home'>
            <div className='section-title'>Home</div>
            <div className='projects'>
                <Project 
                    image={budgetBuddy} 
                    title='Budget Buddy' 
                    git='https://github.com/Group-Saber/saber-budget-buddy' 
                    web='http://saberandrewarteaga.com'
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
                    title='Portfolio' 
                    git='https://github.com/aarteaga53/portfolio' 
                    web='http://andrewarteaga.com'
                    text='Web application to showcase my projects.'
                />
                <Project 
                    title='Machine Learning' 
                    git='https://github.com/aarteaga53/facial_expression_recognition'
                    web='https://www.kaggle.com/competitions/cs4210-summer2022-assignment-2/leaderboard'
                    text='Facial expression recognition model using PyTorch.'
                />
                <Project 
                    title='Team Website' 
                    git='https://github.com/Group-Saber/team_site' 
                    web='http://cs480-projects.github.io/teams-fall2022/Saber/index.html'
                    text='Team members that I worked with on Budget Buddy.'
                />
            </div>
        </div>
    )
}

export default Home
