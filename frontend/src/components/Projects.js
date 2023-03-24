import React from 'react'
import '../styles/Projects.css'
import Project from '../components/Project'
import { ProjectImages } from '../images'
import Terminal from './Terminal'
import Title from './Title'

const Projects = () => {
  const projects = [
    {
      image: ProjectImages.porftolio,
      title: "Andrew's Portfolio",
      git: 'https://github.com/aarteaga53/portfolio',
      web: 'https://andrewarteaga.com',
      text: 'Web application to showcase my projects.'
    },
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
      image: ProjectImages.todo,
      title: 'Task Tracker',
      git: 'https://github.com/aarteaga53/todo',
      text: 'Easily organize and access your tasks, activities, or appointments.'
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
      <div className='other-body'>
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
