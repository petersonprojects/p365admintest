// Bootstrap
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// CSS
import './Header.css';
// Router
import { Link } from "react-router-dom";

const Header = () => {

    return (

            <Row>
                <Navbar bg="light" variant="light" style={{backgroundColor:"#e9e9e9"}}>

                    <Container fluid style={{paddingLeft:'10px'}}>

                        <Navbar.Brand href="#home">
                            <img
                                alt="Preservica Logo"
                                src="/images/logo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '} Discovery
                        </Navbar.Brand>

                        <Nav className="justify-content-end" activeKey="/">

                            <Nav.Item>
                                <Link className="router-link" to="/" style={{fontSize: '14px'}}>My Dashboard</Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link className="router-link" to="/signout" style={{fontSize: '14px'}}>Sign Out</Link>
                            </Nav.Item>

                        </Nav>
                    </Container>
                </Navbar>
            </Row>

    )
}

export default Header;