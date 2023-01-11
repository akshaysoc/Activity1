import img from './img.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ce from './ce.jpg'
import './about.css'


function    About() {
    
    return(
        <>
    <Card className='card'>
        <Card.Img variant="top" src={ce} style={{backgroundSize:'cover',width: "300px", minHeight: '200px'}}/>
        <Card.Body>
          <Card.Title>B.Tech</Card.Title>
          <Card.Text>CIVIL ENGINEERING</Card.Text>
          <Card.Text>Annual Intake: 120 seats</Card.Text>
          <Button style={{marginLeft:'75px'}} variant="primary">Apply Now</Button>
        </Card.Body>
      </Card>
      
        </>
    )}
    
    export default About;