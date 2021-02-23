import React from 'react';
import {Navbar,Nav,Button,Badge} from 'react-bootstrap';
import {FaHome} from 'react-icons/fa';
import {Link,withRouter} from 'react-router-dom';
import whiteLogo from '../../assets/images/whiteLogo.png';
import './navBar.css';

const NavBar = props => {

    const handleSignOut = () => {
      if(props.loggedInStatus === "LOGGED_IN"){
        localStorage.clear('jwtToken');
        props.handleSuccessfulLogout();
        props.history.push('/');
      }else{
        console.log("error logging out")
      } 
    };

    console.log(props.loggedInStatus);

    return(
        <div>
            <Navbar sticky="top" className="navbar-background" variant="light">
            <Navbar.Brand>
            <Link to="/">   
            <img
                src={whiteLogo}
                width="140"
                height="55"
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
                    {props.loggedInStatus === "NOT_LOGGED_IN" ? (
                    <Nav.Link><Link to="/investors"><Button className="white" variant="muted">investors</Button></Link></Nav.Link>
                    ): null}
                    <Nav.Link><Link to='/' className="home-icon"><FaHome/></Link></Nav.Link>
                    {props.loggedInStatus === "NOT_LOGGED_IN" ? (
                    <Nav.Link><Link to="/about"><Button className="white" variant="muted">About</Button></Link></Nav.Link>
                    ): null}
                    {props.loggedInStatus === "NOT_LOGGED_IN" ? (
                    <Nav.Link><Link to="/signup"><Button className="white" variant="muted">Sign up</Button></Link></Nav.Link>
                    ): null}
                    {props.loggedInStatus === "LOGGED_IN" ? (
                   <Nav.Link><Link to="/profile"><Button className="white" variant="muted">Profile</Button></Link></Nav.Link>
                    ): null}
                    {props.loggedInStatus === "LOGGED_IN" ? (
                   <Nav.Link><Link to="/display"><Button className="white" variant="muted">Products/investors</Button></Link></Nav.Link>
                    ): null}
                </Nav>
            </Navbar.Collapse>
                {props.loggedInStatus === "LOGGED_IN" ? (
                   <Nav.Link><Link to="/messenger"><Button className="white" variant="muted">Messenger <Badge variant="light">0</Badge></Button></Link></Nav.Link>
                    ): null}
                {props.loggedInStatus === "NOT_LOGGED_IN" ? (
                   <Nav.Link><Link to="/login"><Button className="lightgreen" variant="muted">Log in</Button></Link></Nav.Link>
                    ): null}
                {props.loggedInStatus === "LOGGED_IN" ? (
                   <Nav.Link><Button className="lightgreen" variant="muted"  onClick={handleSignOut}>Log Out</Button></Nav.Link>
                    ): null}
            </Navbar>
        </div>
    )
  }  

export default withRouter(NavBar);