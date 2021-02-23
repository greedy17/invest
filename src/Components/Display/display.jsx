import React from 'react';
import {Card,Jumbotron,Button,Form,FormControl, Badge} from 'react-bootstrap';
import './display.css';

const Display = () => {
    return(
        <div>
            <Jumbotron className="search-display">
                <div className="center">
                <h5 className="bold color-white">Search our list of products and investors.</h5> 
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-warning">Search</Button>
                </Form>  
                </div> 
            </Jumbotron>

            <Jumbotron className="display-list">
                <div className='container'>
                <Card className="display-card">
                    <Card.Header as="h5">Edward Roberson <span className="role-color">(Owner)</span></Card.Header>
                    <Card.Body>
                        <Card.Title>Super cool tech product</Card.Title>
                        <Card.Text className="role-color">~ $2,300 / $6,000 goal~</Card.Text>
                        <Card.Text>
                        Brief description of my super cool tech product.
                        </Card.Text>
                        <Button className="green space">View</Button><Button variant="outline-warning">Invest</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className='container'>
                <Card className="display-card">
                    <Card.Header as="h5">EyeInvestAlot <span className="role-color">(investor)</span></Card.Header>
                    <Card.Body>
                        <Card.Title>Has invested in <Badge variant="light">3</Badge> products on invest.</Card.Title>
                        <Card.Text>
                        Typically invests' in tech and toys.
                        </Card.Text>
                        <Button className="green space">investments</Button><Button variant="outline-warning">Msg</Button>
                    </Card.Body>
                </Card>
                </div>   
                <div className='container'>
                <Card className="display-card">
                    <Card.Header as="h5">Edward Roberson <span className="role-color">(Owner)</span></Card.Header>
                    <Card.Body>
                        <Card.Title>Super cool tech product</Card.Title>
                        <Card.Text>
                        Brief description of my super cool tech product.
                        </Card.Text>
                        <Button className="green space">View</Button><Button variant="outline-warning">Invest</Button>
                    </Card.Body>
                </Card>
                </div>              
            </Jumbotron>
        </div>
    )
}

export default Display;