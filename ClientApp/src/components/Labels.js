import {Container, Card, Button} from "react-bootstrap";
import './Services.css';

const  Labels = () => {

    return (
        <>
           
      <Container>
        <div style={{padding:'5px',paddingBottom:'10px', paddingTop: '10px'}}>Compliance > Labels</div>
        <br></br>
        <Card style={{width:'70%'}}>
          <Card.Body>
            <Card.Title className="heading">Labels</Card.Title>
            <Card.Text className="subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
        </>
    );
}

export default Labels;