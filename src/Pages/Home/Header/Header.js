import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo1.png'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />Halal Food</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            {user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;