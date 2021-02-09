import React from 'react';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap';
import whiteLogo from '../../assets/images/whiteLogo.png';
import './navBar.css'

const NavBar = () => {
    return(
        <div>
            <Navbar sticky="top" className="navbar-background" variant="light">
            <Navbar.Brand href="#home">
            <img
                src={whiteLogo}
                width="156"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                </Nav>
                <Nav>
                <Nav.Link href="sign"><Button className="white" variant="muted">Sign up</Button></Nav.Link>    
                <Nav.Link href="log"><Button className="white" variant="muted">Log in</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className="green search">Search</Button>
            </Form>
            </Navbar>
        </div>
    )
}

export default NavBar;