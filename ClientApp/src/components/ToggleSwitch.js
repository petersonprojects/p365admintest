import React, {useState} from "react";
import "./ToggleSwitch.css";
import Row from "react-bootstrap/Row";
import { useSelector } from 'react-redux';

const ToggleSwitch = (props) => {

    const reduxState = useSelector(state => state.accentColor);
    const [bg, setBG] = useState('white');
    const [bg2, setBG2] = useState('black');

    const [toggle, setToggle] = useState(false);

    const handleClick = (el) => {

        if(toggle === false)
        {
            setBG(reduxState);
            setBG2('white');
        }
        else
        {
            setBG('white')
            setBG2('black')

        }

        setToggle(!toggle);

    }

    const genOnOff = (toggle) => {

        let jsx;

        toggle ? jsx = "On" : jsx = "Off"

        return jsx;
    }

    return (
        <Row style={{paddingLeft: '20px'}}>

                <label className="switch"   for="checkbox">
                    <input type="checkbox" id="checkbox" onClick={handleClick}/>
                    <div className="slider round" style={{backgroundColor: bg}}></div>

                </label>
                {genOnOff(toggle)}
        </Row>
    );
}

export default ToggleSwitch;
