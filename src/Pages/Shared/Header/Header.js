import React from 'react';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './header.css'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="Header-container">
            <>
                <Navbar bg="info" variant="light" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Collapse className="justify-content-start">
                            <img
                                src={logo}
                                width="100"
                                height="80"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">Doctor</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>

                        </Navbar.Collapse>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            {user?.email ? <div>
                                <span className="display-name"> {user?.displayName}</span>
                                <Button className="logout-btn" onClick={logOut} variant="light">Logout</Button>
                            </div>
                                :
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                                </>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;