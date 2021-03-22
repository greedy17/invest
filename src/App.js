import React, {useState} from 'react';
import {Switch, Route,BrowserRouter,useHistory} from 'react-router-dom';
import NavBar from './Components/NavBar/navBar';
import LandingPage from './Components/LandingPage/landingPage';
import SignUp from './Components/SignUp/signUp';
import About from './Components/About/about';
import Profile from './Components/Profile/profile';
import BusinessPlanBuilder from './Components/BusinessPlanBuilder/businessPlanBuilder';
import Messenger from './Components/Messenger/messenger';
import Error404 from './Components/Error404/error404';
import Login from './Components/LogIn/logIn';
import Investors from './Components/Investors/investors';
import Products from './Components/Products/products';
import News from './Components/News/news';
import Inbox from './Components/Messenger/Inbox/inbox';
import AddProduct from './Components/AddProduct/addProduct';
import './App.css';


  const App = () => {
  
  const history = useHistory();
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN')
    
  const handleSuccessfulLogin = () => {
        setLoggedInStatus("LOGGED_IN");
  }
  
  const handleUnsuccessfulLogin = () => {
        setLoggedInStatus("NOT_LOGGED_IN");
    }

  const handleSuccessfulLogout = () => {
        setLoggedInStatus("NOT_LOGGED_IN");
    }

  const authorizedPages = () => {
    return [<Route path="/profile" component={Profile} />];
  }
 
  return (
      <BrowserRouter history={history}>
        <NavBar
        loggedInStatus={loggedInStatus}
        handleSuccessfulLogout={handleSuccessfulLogout}
        />
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route
            path="/login">
            <Login
                handleSuccessfulLogin={handleSuccessfulLogin}
                handleUnsuccessfulLogin={handleUnsuccessfulLogin}
              />
          </Route> 
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/about' component={About}></Route>
          {loggedInStatus === "LOGGED_IN" ? (authorizedPages()) : null}
          <Route path='/businessPlan' component={BusinessPlanBuilder}></Route>
          <Route path='/messenger' component={Messenger}></Route>
          <Route path='/investors' component={Investors}></Route>
          <Route path='/products' component={Products}></Route>
          <Route path='/news' component={News}></Route>
          <Route path="/inbox" component={Inbox}/>
          <Route path="/addProduct" component={AddProduct}/>
          <Route path='*' component={Error404}></Route>
        </Switch>
    </BrowserRouter>  
  );
}


export default App;