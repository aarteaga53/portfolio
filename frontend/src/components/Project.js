import { useNavigate } from 'react-router-dom';
import place from '../images/placeholder.png'

const Project = ({project}) => {
  let navigate = useNavigate()

  let showSlides = () => {
    navigate('/slideshow', { state: { set: project.title } })
  }

  return (
    <div className='project-glass-tile'>
      <div className='project-glass'></div>
      <div className='project-card'>
        <img className='project-img' src={project.image || place} alt='project' onClick={showSlides} />
        <div className='project-body'>
          <div className='project-title'>{project.title || 'Project'}</div>
          <div className='project-text'>{project.text || 'In progress...'}</div>
          <div className='project-buttons'>
            {project.git ? (<a className='project-btn' href={project.git} target='_blank' rel='noopener noreferrer'>GitHub</a>) : null}
            {project.web ? (<a className='project-btn' href={project.web} target='_blank' rel='noopener noreferrer'>Link</a>) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;