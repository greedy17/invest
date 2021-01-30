import React from 'react';
import {Jumbotron,Card,Container,Button,Badge} from 'react-bootstrap';
import './landingPage.css'

const LandingPage = () => {
 return(
     <div>

     <Jumbotron className="hero center" fluid>
        <h1 className="welcome">Welcome to invest.</h1>
        <h3>
           Turn your plans into profits.
        </h3>
    </Jumbotron>  

    <Container className="space">
    <Card>
        <Card.Body>
        <Card.Text className="center">
            Some quick example text to build on the card title and make up the bulk
            of the card's content.<Badge variant="success">1</Badge>
        </Card.Text>
        </Card.Body>
        <Card.Img 
        variant="bottom" 
        src={require("../../assets/images/cartoon.jpeg")}
        height={"300"}
        />
    </Card>
    </Container>

    <Container className="space">
    <Card>
        <Card.Body>
        <Card.Text className="center">
            Some quick example text to build on the card title and make up the bulk
            of the card's content.<Badge variant="success">2</Badge>
        </Card.Text>
        </Card.Body>
        <Card.Img 
        variant="bottom" 
        src={require("../../assets/images/cartoon.jpeg")}
        height={"300"}
        />
    </Card>
    </Container>

    <Container className="space">
    <Card>
        <Card.Body>
        <Card.Text className="center">
            Some quick example text to build on the card title and make up the bulk
            of the card's content.<Badge variant="success">3</Badge>
        </Card.Text>
        </Card.Body>
        <Card.Img 
        variant="bottom" 
        src={require("../../assets/images/cartoon.jpeg")}
        height={"300"}
        />
    </Card>
    </Container>

    <Container className="center space space-bottom">
        <Button variant="outline-success">Get started!</Button> 
    </Container>

     </div>
 )
}

export default LandingPage;