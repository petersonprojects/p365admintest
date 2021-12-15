import ToggleSwitch from "./ToggleSwitch";
import Row from "react-bootstrap/Row";
import DraggableList from './DraggableList.js';
import {Container, Card, Button} from "react-bootstrap";
import './Services.css';


const  OneDrive = () => {
    return (
      <>
        
      <Container>
        <div style={{padding:'5px',paddingBottom:'10px', paddingTop: '10px'}}>Services > OneDrive</div>
        <br></br>
        <Card style={{width:'70%'}}>
          <Card.Body>
            <Card.Title className="heading">OneDrive</Card.Title>
            <Card.Text className="subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
        {/* <h1>Toggle Switch</h1>

        <Row style={{paddingLeft: '8px'}}>
          <b>Show title commands</b>
        </Row>
       <ToggleSwitch Name="Test"/>

        <Row style={{paddingLeft: '8px'}}>
        
          <DraggableList/>
        </Row> */}

      </>
    );
  }
  
export default OneDrive;