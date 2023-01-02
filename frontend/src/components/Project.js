import place from '../images/placeholder.png'

const Project = ({image = place, title = 'Project', git, web, text=''}) => {
  return (
    <div className='project-card'>
      <img className='project-img' src={image} alt='project' />
      <div className='project-body'>
        <div className='project-title'>{title}</div>
        <div className='project-text'>{text}</div>
        <div className='project-buttons'>
          <a className='button' href={git} target='_blank' rel='noopener noreferrer'>GitHub</a>
          {web ? <a className='button' href={web} target='_blank' rel='noopener noreferrer'>Link</a> : null}
        </div>
      </div>
    </div>
  )
}

export default Project;