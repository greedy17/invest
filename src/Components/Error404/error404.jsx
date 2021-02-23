import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './error404.css';

const Error404 = () => {
    return(
       <Container>
           <Jumbotron className="error404">
               <div>
                   <h1 className="not-found-title">404 NOT FOUND</h1>
               </div>
               <div>
                   <p className="head-home">Looks like you have lost your way :(</p>
               </div>
               <div>
                   <Link to="/" className="head-home">
                   You should head back home.
                   </Link>
               </div>
           </Jumbotron>
       </Container>
    )
}

export default Error404;