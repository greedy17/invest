import React from 'react';
import Login from '../LogIn/logIn';

const Auth = props => {
   
  const handleSuccessfulAuth = () => {
        props.handleSuccessfulLogin();
        props.history.push("/profile");
      }

  const handleUnsuccessfulAuth = () => {
        props.handleUnsuccessfulLogin();
      }
  
  const values = props.values;
  const handleChange = props.handleChange;
  const userLogin = props.checkLoginStatus;   

  return(
    <Login
    handleSuccessfulAuth={handleSuccessfulAuth}
    handleUnsuccessfulAuth={handleUnsuccessfulAuth}
    values={values}
    handleChange={handleChange}
    userLogin={userLogin}
    />)
}

export default Auth;