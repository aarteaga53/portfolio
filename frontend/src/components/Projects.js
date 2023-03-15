import React from 'react'
import '../styles/Projects.css'
import Project from '../components/Project'
import { ProjectImages } from '../images'
// import budgetBuddy from '../images/budgetbuddy.png'
// import myNotes from '../images/list.jpg'
// import porftolio from '../images/portfolio.png'
// import machine from '../images/machine.png'
// import pss from '../images/pss.png'
// import freenos from '../images/freenos.jpg'
import Terminal from './Terminal'
import Title from './Title'

const Projects = () => {
  const projects = [
    {
      image: ProjectImages.budgetBuddy, 
      title: 'Budget Buddy',
      git: 'https://github.com/Group-Saber/saber-budget-buddy',
      web: 'https://saber.andrewarteaga.com',
      text: 'Web applicaton to keep track of your budget and debt.'
    }, 
    {
      image: ProjectImages.myNotes,
      title: 'My Notes',
      git: 'https://github.com/aarteaga53/my-notes',
      web: 'https://play.google.com/store/apps/details?id=com.arteagaapp.mynotes&pli=1',
      text: 'Mobile application to store and organize school notes.'
    },
    {
      image: ProjectImages.porftolio,
      title: "Andrew's Portfolio",
      git: 'https://github.com/aarteaga53/portfolio',
      web: 'https://andrewarteaga.com',
      text: 'Web application to showcase my projects.'
    },
    {
      image: ProjectImages.machine,
      title: 'Machine Learning',
      git: 'https://github.com/aarteaga53/facial_expression_recognition',
      web: 'https://www.kaggle.com/competitions/cs4210-summer2022-assignment-2/leaderboard',
      text: 'Facial expression recognition model using PyTorch.'
    },
    {
      image: ProjectImages.pss,
      title: 'Personal Scheduling Service',
      git: 'https://github.com/aarteaga53/PSS',
      web: 'https://drive.google.com/file/d/1mV-pTcLFmogqo2GmOb0n3g1QJFoxiygt/view?usp=sharing',
      text: 'Java program to schedule tasks on a given day for a set time.'
    },
    {
      image: ProjectImages.freenos,
      title: 'FreeNOS',
      git: 'https://github.com/CS4310-Group-BrOs/FreeNOS',
      web: 'https://www.youtube.com/watch?v=kbUgqW4eEvI',
      text: 'OS used to learn concepts by implementing Linux-like commands.'
    }
  ]

  return (
    <div id='projects'>
      <div className='page-body'>
        <Title title='Projects' section='section-title' />
        <div className='projects'>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
        <Terminal />
      </div>
    </div>
  )
}

export default Projects
