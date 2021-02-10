import React from 'react';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';
import whiteLogo from '../../assets/images/whiteLogo.png';
import LandingPage from '../LandingPage/landingPage';
import LogIn from '../LogIn/logIn';
import Profile from '../Profile/profile';
import SignUp from '../SignUp/signUp';
import './navBar.css'

const NavBar = () => {
    return(
        <div>
            <Navbar sticky="top" className="navbar-background" variant="light">
            <Navbar.Brand>
            <Link to="/">   
            <img
                src={whiteLogo}
                width="156"
                height="60"
                className="d-inline-block align-top"
                alt="invest logo"
            />
            </Link> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                </Nav>
                <Nav>
                    <Nav.Link><Link to="/signup"><Button className="white" variant="muted">Sign up</Button></Link></Nav.Link>    
                    <Nav.Link><Link to="/login"><Button className="white" variant="muted">Log in</Button></Link></Nav.Link>
                    <Nav.Link><Link to="/profile"><Button className="white" variant="muted">Profile</Button></Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className="green search">Search</Button>
            </Form>
            </Navbar>

            <div>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={LogIn}/>
                <Route path="/profile" component={Profile}/>
            </div>
        </div>
    )
}

export default NavBar;