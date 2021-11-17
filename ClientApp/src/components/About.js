import React, { useState } from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";

const About = () => {

  const reduxState = useSelector(state => state.accentColor);

  const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
  `;

  const Item = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  position: relative;
  `;

  const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  background: white;
  border: 1px solid #bebebe;
  `;
  const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
    border:black;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: white;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      background: gray;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: white;
      border: 1px solid ${reduxState};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 5px;
        background: ${reduxState};
      }
    }
  `}
  `;
  const [select, setSelect] = useState("betterPriceOnly");

  const [bg, setBG] = useState('gray');


  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  }

  return (

    <Wrapper >
        <h1>Radio Buttons</h1>
        <b style={{marginLeft:'10px'}}>Select a news source</b>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="betterPriceOnly"
          checked={select === "betterPriceOnly"}
          onChange={(event) => handleSelectChange(event)}
          style={{color:bg}}
        />
        <RadioButtonLabel />
        <div style={{paddingTop:'5px'}}>This Site</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="anyPriceChange"
          checked={select === "anyPriceChange"}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div style={{paddingTop:'5px'}}>Select Sites</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="neverAutoAccept"
          checked={select === "neverAutoAccept"}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div style={{paddingTop:'5px'}}>Recommend Site For User</div>
      </Item>
    </Wrapper>
  );
};


export default About;