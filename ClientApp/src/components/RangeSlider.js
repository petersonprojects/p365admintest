import React, { useState } from 'react';
import Slider from 'react-rangeslider';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// To include the default styles
import styled from "styled-components";
import './RangeSlider.css';
 
const RangeSlider = (props) => {

    const [volume, setVolume] = useState(0);
 
  let handleOnChange = (value) => {
    setVolume(value);

  }
 
    return (
        <>
        <Row>      
        <Col xs={10}>
            <Slider
            value={volume}
            min={0}
            max={100}
            orientation="horizontal"
            onChange={handleOnChange}
        />
        </Col>
        <Col xs={2} className="center">
            {/* {volume} */}
            {props.color}
        </Col>

        </Row>

      </>


    );

}

export default RangeSlider;