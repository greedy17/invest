import React from 'react';
import LandingPage from './Components/LandingPage/landingPage';
import Footer from './Components/Footer/footer';
import NavBar from './Components/NavBar/navBar';
import SignUp from './Components/SignUp/signUp';
import OwnerSignUp from './Components/SignUp/OwnerSignUp/ownerSignUp';
import InvestorSignUp from './Components/SignUp/InvestorSignUp/investorSignUp';
import Profile from './Components/Profile/profile';
import {BrowserRouter} from 'react-router-dom';
import './App.css'
import BusinessPlanBuilder from './Components/BusinessPlanBuilder/businessPlanBuilder';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  );
}

export default App;
