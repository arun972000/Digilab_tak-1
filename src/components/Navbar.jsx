import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"
import AnimatedLoginButton from './Login';
import logo from "../assets/LOGO.svg"

function NavBar() {
    return (
        <>
            <p className="text-center nav-text"><span style={{ borderRadius: 24, fontSize: 12, backgroundColor: "#E6E7E9", padding: "4px 8px" }}>Announcement</span> We are happy to announce that we raise $2 Million in Seed Funding</p>
            <Navbar expand="lg" className="mb-5" style={{ borderTop: "1px solid #E6E7E9", borderBottom: "1px solid #E6E7E9" }}>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
                    <AnimatedLoginButton/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto py-2">
                            <NavDropdown title="Card access" id="basic-nav-dropdown" className="nav-head" style={{ paddingRight: '16px', paddingLeft: '16px' }}>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home" className="nav-head" style={{ paddingRight: '16px', paddingLeft: '16px' }}>Banking</Nav.Link>
                            <Nav.Link href="#link" className="nav-head" style={{ paddingRight: '16px', paddingLeft: '16px' }}>Processing</Nav.Link>
                            <Nav.Link href="#link" className="nav-head" style={{ paddingRight: '16px', paddingLeft: '16px' }}>About</Nav.Link>
                            <Nav.Link href="#link" className="nav-head" style={{ paddingRight: '16px', paddingLeft: '16px' }}>Carrier</Nav.Link>
                            <Nav.Link href="#link" className="nav-head" style={{ paddingRight: '16px', paddingLeft: '16px' }}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;