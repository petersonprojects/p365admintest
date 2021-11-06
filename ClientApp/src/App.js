//CSS
import './App.css';
import './index.css';
import React from 'react';
import RangeSlider from "./components/RangeSlider.js"
import Row from "react-bootstrap/Row";
const  Home = () => {
  return (
    <>
      <h1>Range Slider</h1>
      {/* <p>Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.</p> */}
      <br/>


<Row style={{paddingLeft:'8px'}}>
            <b>Number of news posts to show</b>
            <div style={{width:'30%'}}>
              <RangeSlider/>
            </div>
            </Row>



    </>
  );
}

export default Home;
