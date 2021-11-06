import ToggleSwitch from "./ToggleSwitch";
import Row from "react-bootstrap/Row";
import DraggableList from './DraggableList.js';


const  Projects = () => {
    return (
      <>
        <h1>Toggle Switch</h1>

        <Row style={{paddingLeft: '8px'}}>
          <b>Show title commands</b>
        </Row>
       <ToggleSwitch Name="Test"/>

        <Row style={{paddingLeft: '8px'}}>
        
          <DraggableList/>
        </Row>

      </>
    );
  }
  
export default Projects;