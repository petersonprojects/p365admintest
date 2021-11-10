import {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTheme } from '../actions/loadTheme.js';
import RadioOption from './RadioOption';
// import Row from "react-bootstrap/Row";
import "./Members.css";
const  Members = () => {

    const reduxState = useSelector(state => state.accentColor);
    const dispatch = useDispatch();

    const [color, setColor] = useState('transparent');

    useEffect(()=>{

        async function getTheme() {

            dispatch(loadTheme());

        }

        getTheme();

    }, [])

    let handleMouseEnter = (e) => {

        setColor(reduxState);
    }
    let handleMouseLeave = (e) => {

        setColor('transparent');
    }

    return (
        <>
            <h1>Members</h1>

            <p>Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?</p>
            {reduxState}
            <div className="radio-container" role="radiogroup">


                <div className="radio-option-container">
                    <input style={{display:'none'}} type="radio" id="0" name="test1"/>
                    <label className="label-radio" for="0">

                        <div className="hole-punch-container" style={{height:'30px'}}>
                            <div className="ugly-hole-punch">
                                <div className="innermost-circle" ></div>
                            </div>
                        </div>

                        <svg width="100%" height="40%" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.22 6.781a.75.75 0 0 1-.073-.976l.073-.085 2.367-2.37a.77.77 0 0 1 .664-.35c.252 0 .475.109.611.276l.053.075 2.367 2.37.073.084a.75.75 0 0 1 .007.882l-.08.094-.084.073a.75.75 0 0 1-.883.007l-.094-.08L17 5.56v14.784l-.007.089c-.05.32-.363.567-.743.567s-.694-.247-.743-.567l-.007-.09V5.56l-1.22 1.221-.084.073a.75.75 0 0 1-.976-.073ZM6.25 3.992A2.25 2.25 0 0 0 4 6.242v11.5a2.25 2.25 0 0 0 2.25 2.25h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 1-.75-.75v-11.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 0 0-1.5h-4Z" fill="#222F3D"/></svg>
                        Top Story
                    </label>
                </div>


                <div className="radio-option-container">
                    <input style={{display:'none'}} type="radio" id="1" name="test1"/>
                    <label className="label-radio" for="1">
                        
                        <div className="hole-punch-container" style={{height:'66px'}}>
                            <div className="ugly-hole-punch">
                                <div className="innermost-circle"></div>
                            </div>
                        </div>
                        {/* <svg width="100%" height="40%" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.248 16.002c.966 0 1.75.784 1.75 1.75v2.498A1.75 1.75 0 0 1 6.248 22H3.75A1.75 1.75 0 0 1 2 20.25v-2.498c0-.966.784-1.75 1.75-1.75h2.498ZM9.748 18h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493L9.748 18h11.505H9.748Zm-3.5-8.999c.966 0 1.75.784 1.75 1.75v2.498a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 13.249V10.75c0-.966.784-1.75 1.75-1.75h2.498ZM9.748 11h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493L9.748 11h11.505H9.748Zm-3.5-9c.966 0 1.75.784 1.75 1.75v2.498a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 6.248V3.75C2 2.784 2.784 2 3.75 2h2.498Zm3.5 2h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493L9.748 4h11.505H9.748Z" fill="#2980B9"/></svg> */}
                        List
                    </label>
                </div>

                <div className="radio-option-container">
                    <input style={{display:'none'}} type="radio" id="2" name="test1"/>

                    <label className="label-radio" for="2">
                        <div className="hole-punch-container" style={{height:'66px'}}>
                            <div className="ugly-hole-punch">
                                <div className="innermost-circle"></div>
                            </div>
                        </div>
                        Side-by-side
                    </label>
                </div>

                <div className="radio-option-container">
                    <input style={{display:'none'}} type="radio" id="3" name="test1"/>

                    <label className="label-radio" for="3">
                        <div className="hole-punch-container" style={{height:'30px'}}>
                            <div className="ugly-hole-punch">
                                <div className="innermost-circle"></div>
                            </div>
                        </div>
                        <svg width="100%" height="40%" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h12.5a2.25 2.25 0 0 1 2.245 2.096L19 6.25V7h.75a2.25 2.25 0 0 1 2.245 2.096L22 9.25v7.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25h13.5Zm-13.5-1.5h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-7.5a.75.75 0 0 0-.648-.743L19.75 8.5H19v7.75a.75.75 0 0 1-.648.743L18.25 17a.75.75 0 0 1-.743-.648l-.007-.102v-10a.75.75 0 0 0-.648-.743L16.75 5.5H4.25a.75.75 0 0 0-.743.648L3.5 6.25v10.5a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5-13.5Zm6.996-4h3.006a.75.75 0 0 1 .102 1.493l-.102.007h-3.006a.75.75 0 0 1-.102-1.493l.102-.007h3.006-3.006Zm-3.003-3.495a.75.75 0 0 1 .75.75v3.495a.75.75 0 0 1-.75.75H5.748a.75.75 0 0 1-.75-.75v-3.495a.75.75 0 0 1 .75-.75h3.495Zm-.75 1.5H6.498V14.5h1.995v-1.995Zm3.753-1.5h3.006a.75.75 0 0 1 .102 1.493l-.102.007h-3.006a.75.75 0 0 1-.102-1.494l.102-.006h3.006-3.006ZM5.748 7.502h9.504a.75.75 0 0 1 .102 1.494l-.102.006H5.748a.75.75 0 0 1-.102-1.493l.102-.007h9.504-9.504Z" fill="#222F3D"/></svg>
                        Hub news
                    </label>
                </div>

                <div className="radio-option-container">
                    <input style={{display:'none'}} type="radio" id="4" name="test1"/>
                    
                    <label className="label-radio" for="4">
                        <div className="hole-punch-container" style={{height:'30px'}}>
                            <div className="ugly-hole-punch">
                                <div className="innermost-circle"></div>
                            </div>
                        </div>
                        <svg width="100%" height="40%" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25V6.75A2.75 2.75 0 0 0 19.25 4H4.75ZM3.5 6.75c0-.69.56-1.25 1.25-1.25H5v13h-.25c-.69 0-1.25-.56-1.25-1.25V6.75Zm3 11.75v-13H9v13H6.5Zm7.5 0h-3.5v-13H14v13Zm1.5 0v-13h3.75c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H15.5Z" fill="#222F3D"/></svg>
                        Carousel
                    </label>
                </div>

                <div className="radio-option-container">
                    <input style={{display:'none'}} type="radio" id="5" name="test1"/>
                    <label className="label-radio" for="5">
                        <div className="hole-punch-container" style={{height:'30px'}}>
                            <div className="ugly-hole-punch">
                                <div className="innermost-circle"></div>
                            </div>
                        </div>
                        <svg width="100%" height="40%" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 7A1.75 1.75 0 0 0 5 8.75v6.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 19 15.25v-6.5A1.75 1.75 0 0 0 17.25 7H6.75ZM6.5 8.75a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25v1.75h-11V8.75Zm4 3.25h7v3.25a.25.25 0 0 1-.25.25H10.5V12ZM9 12v3.5H6.75a.25.25 0 0 1-.25-.25V12H9Z" fill="#222F3D"/><path d="M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25V6.75A2.75 2.75 0 0 0 19.25 4H4.75ZM3.5 6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25V6.75Z" fill="#222F3D"/></svg>
                        Tiles
                    </label>
                </div>

            </div>


        </>
    );
}

export default Members;