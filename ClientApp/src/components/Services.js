import React, { useState } from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import {Container, Card, Button} from "react-bootstrap";
import './Services.css';

const TopRow = styled.div`

  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  font-size: 14px;

`;

const Services = () => {

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
    <Container>
      <TopRow><div style={{fontWeight:'600'}}>Thick Brain, Inc.</div><button style={{border:'none', backgroundColor: 'transparent', display:'flex'}}><svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.026 17.001c-2.762 4.784-8.879 6.423-13.663 3.661a9.964 9.964 0 0 1-3.234-2.983.75.75 0 0 1 .365-1.131c3.767-1.348 5.785-2.911 6.956-5.146 1.232-2.353 1.551-4.93.689-8.464a.75.75 0 0 1 .769-.926 9.961 9.961 0 0 1 4.457 1.327C21.149 6.1 22.788 12.217 20.025 17Zm-8.248-4.903c-1.25 2.388-3.31 4.099-6.817 5.499a8.492 8.492 0 0 0 2.152 1.766 8.501 8.501 0 1 0 8.502-14.725 8.485 8.485 0 0 0-2.792-1.016c.647 3.384.23 6.044-1.045 8.476Z" fill="#3398DB"/></svg><span style={{display:'flex',flexDirection:'column', paddingLeft:'5px'}}> Dark mode</span></button>
      
      </TopRow>

      <hr style={{width: '100%'}}/>

      <Card style={{width:'70%'}}>
        <Card.Body>
          <Card.Title className="heading">Services</Card.Title>
          <Card.Text className="subheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Card.Text>
        </Card.Body>
      </Card>

    {/* // <Wrapper >
    //     <h1>Radio Buttons</h1>
    //     <b style={{marginLeft:'10px'}}>Select a news source</b>
    //   <Item>
    //     <RadioButton
    //       type="radio"
    //       name="radio"
    //       value="betterPriceOnly"
    //       checked={select === "betterPriceOnly"}
    //       onChange={(event) => handleSelectChange(event)}
    //       style={{color:bg}}
    //     />
    //     <RadioButtonLabel />
    //     <div style={{paddingTop:'5px'}}>This Site</div>
    //   </Item>
    //   <Item>
    //     <RadioButton
    //       type="radio"
    //       name="radio"
    //       value="anyPriceChange"
    //       checked={select === "anyPriceChange"}
    //       onChange={(event) => handleSelectChange(event)}
    //     />
    //     <RadioButtonLabel />
    //     <div style={{paddingTop:'5px'}}>Select Sites</div>
    //   </Item>
    //   <Item>
    //     <RadioButton
    //       type="radio"
    //       name="radio"
    //       value="neverAutoAccept"
    //       checked={select === "neverAutoAccept"}
    //       onChange={(event) => handleSelectChange(event)}
    //     />
    //     <RadioButtonLabel />
    //     <div style={{paddingTop:'5px'}}>Recommend Site For User</div>
    //   </Item>
    // </Wrapper> */}


    </Container>
  );
};


export default Services;