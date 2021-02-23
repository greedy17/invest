import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import Footer from '../Footer/footer';
import './about.css';

const About = () => {
    return(
        <div>
            <Jumbotron className="about-invest container">
                <div className="center">
                    <h1 className="title">About</h1>
                </div>
                    <h5 className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus aliquid 
                    repellat dolores, quas cupiditate nam voluptates quae modi. Voluptates quod dolores 
                    inventore nisi vel consequatur ullam iste explicabo doloribus! Lorem ipsum dolor sit 
                    amet consectetur adipisicing elit. Voluptate nemo reiciendis, fugiat voluptatum tempora 
                    s Unde ullam fuga optio, dolorum iure autem quos illo totam porro molestiae esse sit? Impedit?
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Eveniet, expedita provident recusandae amet dolores harum et porro
                    sint excepturi sed ducimus fuga quasi eaque accusantium beatae mollitia
                    ullam assumenda adipisci. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Eveniet, expedita provident recusandae amet dolores harum et porro
                    sint excepturi sed ducimus fuga quasi eaque accusantium beatae mollitia
                    ullam assumenda adipisci.
                    </h5>
                <Footer/>    
            </Jumbotron>
        </div>
    )
}

export default About;