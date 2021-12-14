//CSS
import './App.css';
import './index.css';
import React, {useEffect, useState} from 'react';
import RangeSlider from "./components/RangeSlider.js"
import Row from "react-bootstrap/Row";

const  Home = () => {
  // const [accentColor, setAccent] = useState(null);

  // useEffect(()=> {

  //   function getTheme () {
  //     fetch(`https://p365services.azurewebsites.net/api/Utilities?code=nwlK1wYTsoGio4nFizR5NjSNHDEsEAlhCFM/j2SjYWWT/4aK1EOqlg==&tenantId=7D6B2DFC-2750-4470-AFD2-6DC13C3F0DD0&siteCollectionId=ACFD1DBB-B31F-459D-B278-61DFB8979CE6&siteId=5FF5AE6F-2886-4277-B0BF-B4872F3D4440&utilityType=siteTheme`)
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log(data);
  //         setAccent(data.AccentColor);
  //     })
  //     .catch(err => console.log(err))
  //   }

  //   getTheme();

  // }, [])

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
