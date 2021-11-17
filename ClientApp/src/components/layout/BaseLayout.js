import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import {ReactComponent as HomeIcon} from "../../icons/home.svg";
// import {ReactComponent as SettingsIcon} from "../../icons/settings.svg";
// import {ReactComponent as AboutIcon} from "../../icons/about.svg";
// import {ReactComponent as BackIcon} from "../../icons/back.svg";
// import {ReactComponent as CaretDownIcon} from "../../icons/caret.svg";
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
//CSS
import '../../App.css';
import '../../index.css';
// import {React, useState, useRef, useEffect} from 'react';
// import {Link} from "react-router-dom";
// import {CSSTransition} from "react-transition-group";
import Menu from '../../components/layout/Menu.js';
import Header from './Header/Header.js';
import {React, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { loadTheme } from '../../actions/loadTheme.js';
import { useSelector } from 'react-redux';


const BaseLayout = (props) => {
    const reduxState = useSelector(state => state.accentColor);
    const dispatch = useDispatch();

    let changeTheme = async () => {
        document.documentElement.style.setProperty("--base",reduxState);
        console.log(`--base changed to ${reduxState}`);
      }


    useEffect(()=>{

        async function getTheme() {

            dispatch(loadTheme());

        }

        getTheme();

    }, [])

    useEffect(()=>{

        changeTheme();

    }, [reduxState])



    return (
        <>
        <Header />
        <Container fluid style={{padding:'0'}}>
            
            <Row>

                {/* Left Side Menu */}
                <Col className="sidebar hidden-md" xs={2}>
                    <Menu/>
                </Col>


                {/* Main Content */}
                <Col className="main-content" xs={10}>
                    {props.children}
                </Col>

            </Row>

        </Container>
 
        {/* <Footer/> */}


        </>

    )
}

export default BaseLayout;