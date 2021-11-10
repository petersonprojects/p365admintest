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
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { loadTheme } from '../../actions/loadTheme.js';
// import {SettingsIcon} from "../../icons/Settings.js";
// import Footer from './Footer';
// const NavBar = (props) => {

//     return (

//         <nav className="navbar2">
//             <ul className="navbar2-nav">

//                     {props.children}

//             </ul>
//         </nav>
//     )
// }

// const DropDownMenu = () => {

//     const [activeMenu, setActiveMenu] = useState('main');
//     const [menuHeight, setMenuHeight] = useState('100%');
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//       setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
//     }, [])

//     function calcHeight (el){
//         const height  = el.offsetHeight;
//         setMenuHeight(height+20);
//     }

//     function DropDownItem(props) {

//         let hayref= props.href || "#";


//         return (
//             <Link to={hayref} className="menu-item" onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}>
//                 <span className="icon-button">{props.icon}</span>
//                 {props.children}
//             </Link>
//         );
//     }

//     return (
//         <div className="dropdown" style={{height:menuHeight}} ref={dropdownRef}>

//             <CSSTransition in={activeMenu === 'main'} 
//             unmountOnExit
//             timeout={500}
//             classNames="menu-primary"
//             onEnter={calcHeight}
//             >

//             <div className="menu">

//                 <DropDownItem 
//                 icon={<HomeIcon/>}
//                 href="/"
//                 >
//                     <span style={{marginLeft:'8px', fontSize: '20px'}}>Home</span>
//                 </DropDownItem> 


//                 <DropDownItem 
//                 icon={<AboutIcon/>}
//                 goToMenu="about"
//                 href="/about"
//                 >
//                     <span style={{marginLeft:'8px', fontSize: '20px'}}>About</span>
//                 </DropDownItem>

//                 <DropDownItem 
//                 icon={<SettingsIcon/>}
//                 goToMenu="settings"
//                 href="/settings"
//                 >
//                     <span style={{marginLeft:'8px', fontSize: '20px'}}>Settings</span>
//                 </DropDownItem>
//             </div>

//             </CSSTransition>

//             <CSSTransition in={activeMenu === 'about'} 
//             unmountOnExit 
//             timeout={500}
//             classNames="menu-secondary"
//             onEnter={calcHeight}
//             >
//                 <div className="menu">
//                     <DropDownItem 
//                     goToMenu="main" 
//                     icon={<BackIcon/>}
                    
//                     >
                    
//                     </DropDownItem>
//                     <DropDownItem 
//                     icon={<AboutIcon/>}
//                     href="/about/projects"
//                     >
//                         <span style={{marginLeft:'8px', fontSize: '20px'}}>projects</span>
//                     </DropDownItem>
//                     <DropDownItem 
//                     icon={<AboutIcon/>}
//                     href="/about/members"
//                     >
//                         <span style={{marginLeft:'8px', fontSize: '20px'}}>members</span>
//                     </DropDownItem>
//                     <DropDownItem 
//                     icon={<AboutIcon/>}
//                     href="/about/product"
//                     >
//                         <span style={{marginLeft:'8px', fontSize: '20px'}}>product</span>
//                     </DropDownItem>
                
//                 </div>

//             </CSSTransition>

//             <CSSTransition in={activeMenu === 'settings'} 
//             unmountOnExit 
//             timeout={500}
//             classNames="menu-secondary"
//             onEnter={calcHeight}
//             >
//                 <div className="menu">

//                     {/* back to main button */}
//                     <DropDownItem 
//                     goToMenu="main" 
//                     icon={<BackIcon/>}
                    
//                     >
                    
//                     </DropDownItem>
//                     <DropDownItem 
//                     icon={<SettingsIcon/>}
//                     href="/settings/admins"
//                     >
//                         <span style={{marginLeft:'8px', fontSize: '20px'}}>admins</span>
//                     </DropDownItem>
//                     <DropDownItem 
//                     icon={<SettingsIcon/>}
//                     href="/settings/advanced"
//                     >
//                         <span style={{marginLeft:'8px', fontSize: '20px'}}>advanced</span>
//                     </DropDownItem>
                
//                 </div>

//             </CSSTransition>


//         </div>

//     )
// }
// const NavItem = (props) => {

//     const [open, setOpen] = useState(false);

//     return (
//       <li className="nav2-item">

//         <button className="icon-button" onClick={()=>setOpen(!open)}>
//             {props.icon}
//         </button>

//         {open && props.children}
//       </li>
//     )
// }

const BaseLayout = (props) => {

    const dispatch = useDispatch();

    useEffect(()=>{

        async function getTheme() {

            dispatch(loadTheme());

        }

        getTheme();

    }, [])

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