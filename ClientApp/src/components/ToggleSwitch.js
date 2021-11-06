import React, {useState} from "react";
import "./ToggleSwitch.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ToggleSwitch = (props) => {

    const [toggle, setToggle] = useState(false);

    const handleClick = (el) => {

        setToggle(!toggle);

    }

    const genOnOff = (toggle) => {

        let jsx;

        toggle ? jsx = "On" : jsx = "Off"

        return jsx;
    }

    return (
        <Row style={{paddingLeft: '20px'}}>

                <label class="switch"   for="checkbox">
                    <input type="checkbox" id="checkbox" onClick={handleClick}/>
                    <div class="slider round" ></div>

                </label>
                {genOnOff(toggle)}
        </Row>
    );
}

export default ToggleSwitch;
