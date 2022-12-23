import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import place from '../images/placeholder.png'

const Project = ({image = place, title = 'Project', git, web, text=''}) => {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem', border: '2px solid #D2263C', borderRadius: '4px' }}>
        <Card.Img variant="top" src={image} style={{ height: '14rem', objectFit: 'cover' }} />
        <Card.Body style={{backgroundColor: '#333333'}}>
          <Card.Title style={{color: 'white'}}>{title}</Card.Title>
          <Card.Text style={{color: 'white'}}>{text}</Card.Text>
          <Button variant="outline-danger" href={git} target='_blank' rel='noopener noreferrer'>GitHub</Button>
          {web ? <Button variant='outline-danger' style={{marginLeft: '15px'}} href={web} target='_blank' rel='noopener noreferrer'>Link</Button> : null}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;