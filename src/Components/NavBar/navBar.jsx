import React, {useState, useEffect} from 'react';
import {Navbar,Nav,Button,Badge} from 'react-bootstrap';
import {FaHome} from 'react-icons/fa';
import {CgLogOut} from 'react-icons/cg';
import {Link,withRouter} from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import whiteLogo from '../../assets/images/whiteLogo.png';
import './navBar.css';

const NavBar = props => {

  const userApi = "http://localhost:5000/api/user/users/"

  const [userInfo, setUserInfo] = useState([]);

  var token = localStorage.getItem('jwtToken');
  
  const getUserInfo = () =>{
      if(token){
          var decoded = jwt_decode(token);
          const newUrl = userApi + decoded._id;
          axios.get(newUrl)
          .then( res => {
          setUserInfo(res.data);
          })
      }
  }


  useEffect(() => {
      getUserInfo();
  },);

    const handleSignOut = () => {
      if(props.loggedInStatus === "LOGGED_IN"){
        localStorage.clear('jwtToken');
        props.handleSuccessfulLogout();
        props.history.push('/');
      }else{
        console.log("error logging out")
      } 
    };

    return(
        <div>
            <Navbar sticky="top" className="navbar-background" variant="light">
            <Navbar.Brand>  
            <img
                src={whiteLogo}
                width="140"
                height="55"
                className="d-inline-block align-top"
                alt="invest logo"
            /> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                </Nav>
                <Nav>
                    {props.loggedInStatus === "LOGGED_IN" ? (
                    <Nav.Link><Link to='/news' className="home-icon"><FaHome/></Link></Nav.Link>
                    ): null}
                    {props.loggedInStatus === "NOT_LOGGED_IN" ? (
                    <Nav.Link><Link to='/' className="home-icon"><FaHome/></Link></Nav.Link>
                    ): null}
                    {props.loggedInStatus === "NOT_LOGGED_IN" ? (
                    <Nav.Link><Link to="/about"><Button className="white" variant="muted">About</Button></Link></Nav.Link>
                    ): null}
                    {props.loggedInStatus === "NOT_LOGGED_IN" ? (
                    <Nav.Link><Link to="/signup"><Button className="white" variant="muted">Sign Up</Button></Link></Nav.Link>
                    ): null}
                    {props.loggedInStatus === "LOGGED_IN" && userInfo.role === "owner" ? (
                    <Nav.Link><Link to="/investors"><Button className="white" variant="muted">Find Investors</Button></Link></Nav.Link>
                    ): null}
                     {props.loggedInStatus === "LOGGED_IN" ? (
                   <Nav.Link><Link to="/messenger"><Button className="white" variant="muted">Messenger <Badge variant="light">0</Badge></Button></Link></Nav.Link>
                    ): null}
                     {props.loggedInStatus === "LOGGED_IN" && userInfo.role === "investor" ? (
                    <Nav.Link><Link to="/products"><Button className="white" variant="muted">Find Products</Button></Link></Nav.Link>
                    ): null}
                    {props.loggedInStatus === "LOGGED_IN" ? (
                   <Nav.Link><Link to="/profile"><Button className="white" variant="muted">Profile</Button></Link></Nav.Link>
                    ): null}
                </Nav>
            </Navbar.Collapse>
                {props.loggedInStatus === "LOGGED_IN" ? (
                   <Nav.Link className="welcome-user">Welcome, {userInfo.name}</Nav.Link>
                    ): null}
                {props.loggedInStatus === "NOT_LOGGED_IN" ? (
                   <Nav.Link><Link to="/login"><Button className="lightgreen" variant="muted">Log In</Button></Link></Nav.Link>
                    ): null}
                {props.loggedInStatus === "LOGGED_IN" ? (
                   <Nav.Link><Button className="lightgreen" variant="muted"  onClick={handleSignOut}>Sign out <CgLogOut/></Button></Nav.Link>
                    ): null}
            </Navbar>
        </div>
    )
  }  

export default withRouter(NavBar);