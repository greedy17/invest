import React from 'react';
import {Button,Container,Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './landingPage.css';
import plan from '../../assets/images/plan.jpeg';
import budget from '../../assets/images/budget.jpeg';
import present from '../../assets/images/present.jpeg';

const LandingPage = () => {
 return(
     <div>
        <Container>
            <Carousel className="slides">
                <Carousel.Item className="item">
                    <img
                    className="d-block w-100 item"
                    src={plan}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="item">
                    <img
                    className="d-block w-100 item"
                    src={budget}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="item">
                    <img
                    className="d-block w-100 item"
                    src={present}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="center">
                <Button className="start"><Link className="link-color" to="/signup">Get Started!</Link></Button>
            </div>
         </Container>
     </div>
 )
}

export default LandingPage;