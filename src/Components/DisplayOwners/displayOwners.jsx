import React from 'react';
import {Card,Container,Button} from 'react-bootstrap';

const DisplayOwners = () => {
    return(
        <div>
            <Container>
                <div>
                <Card>
                    <Card.Header as="h5">Edward Roberson</Card.Header>
                    <Card.Body>
                        <Card.Title>Super cool tech product</Card.Title>
                        <Card.Text>
                        Brief summary of my super cool tech product.
                        </Card.Text>
                        <Button variant="primary">View Product</Button>
                    </Card.Body>
                </Card>
                </div>           
            </Container>
        </div>
    )
}

export default DisplayOwners;