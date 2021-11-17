import React, { useState, useEffect } from 'react';
import Slider from 'react-rangeslider';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// To include the default styles
import { useSelector } from 'react-redux';
import styled from "styled-components";
import './RangeSlider.css';

const RangeSlider = (props) => {

    const reduxState = useSelector(state => state.accentColor);

    const [volume, setVolume] = useState(0);

    let changeTheme = async () => {
      document.documentElement.style.setProperty("--base",reduxState);
      console.log(`--base changed to ${reduxState}`);
    }

    useEffect(()=>{

      changeTheme();

    }, [reduxState])

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
            {volume}
        </Col>

        </Row>

      </>


    );

}

export default RangeSlider;