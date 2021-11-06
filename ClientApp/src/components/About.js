// import React from 'react';
// import Row from "react-bootstrap/Row";
// import "./About.css";
// // import Col from "react-bootstrap/Col";
// const  About = () => {
//   return (
//     <>
//       <h1>About</h1>
//       <p>Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.</p>
//       <Row style={{paddingLeft: '8px'}}>
//         <b>Select a news source</b>
//       </Row>
//       <ul>
//         <li><input type="radio" value="this-site" name="news-source" /> This Site </li>
//         <li ><input type="radio" value="select-sites" name="news-source" /> Select Sites</li>
//         <li  ><input type="radio" value="recommend-sites" name="news-source" /> Recommend for current user</li>
//       </ul>

//       <ul>

//            <li> <label class="container">One
//         <input type="checkbox" value="One" name="One"/>
//         <span class="checkmark"></span>
//         </label> </li>


//       <li><label class="container">Two
//         <input type="checkbox" value="Two"  name="Two"/>
//         <span class="checkmark"></span>
//         </label></li>


//       <li><label class="container">Three
//         <input type="checkbox" value="Three"  name="Three"/>
//         <span class="checkmark"></span>
//         </label></li>


//       <li><label class="container">Four
//         <input type="checkbox" value="Four"  name="Four"/>
//         <span class="checkmark"></span>
//         </label></li>
//       </ul>



//   </>
//   );
// }

import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const About = () => {
  const [select, setSelect] = useState("betterPriceOnly");
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };
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
      border: 1px solid rgb(0, 120, 212);
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 5px;
        background: rgb(0, 120, 212);
      }
    }
  `}
`;

export default About;