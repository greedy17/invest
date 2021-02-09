import React from 'react';
import {Button,Container,Carousel} from 'react-bootstrap';
import './landingPage.css';
import plan from '../../assets/images/plan.jpeg';
import budget from '../../assets/images/budget.jpeg';
import present from '../../assets/images/present.jpeg';

const LandingPage = () => {
 return(
     <div>
        <Container>
        <Carousel className="slides">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={plan}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={budget}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={present}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </Container>
        <div className="center">
        <Button className="start">Get started!</Button>
        </div>
     </div>
 )
}

export default LandingPage;