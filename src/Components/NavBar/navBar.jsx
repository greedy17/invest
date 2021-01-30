import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

const NavBar = () => {
    return(
        <div>
            <Navbar collapseOnSelect sticky="top" bg="light" variant="light">
            <Navbar.Brand href="#home">Invest</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link eventKey={2} href="log">
                    Log in
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;