import place from '../images/placeholder.png'

const Project = ({project}) => {
  return (
    <div className='project-card'>
      <img className='project-img' src={project.image || place} alt='project' />
      <div className='project-body'>
        <div className='project-title'>{project.title || 'Project'}</div>
        <div className='project-text'>{project.text || 'In progress...'}</div>
        <div className='project-buttons'>
          {project.git ? (<a className='button' href={project.git} target='_blank' rel='noopener noreferrer'>GitHub</a>) : null}
          {project.web ? (<a className='button' href={project.web} target='_blank' rel='noopener noreferrer'>Link</a>) : null}
        </div>
      </div>
    </div>
  )
}

export default Project;