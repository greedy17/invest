import React from 'react';
import {Card,Container,Button} from 'react-bootstrap';

const DisplayInvestors = () => {
    return(
        <div>
             <Container>
                <div>
                <Card>
                    <Card.Header as="h5">Investor Guy</Card.Header>
                    <Card.Body>
                        <Card.Title>Typically invests in technology</Card.Title>
                        <Card.Text>
                        profile bio/about me will go here. 
                        </Card.Text>
                        <Button variant="primary">Send message</Button>
                    </Card.Body>
                </Card>
                </div>           
            </Container>
        </div>
    )
}

export default DisplayInvestors;