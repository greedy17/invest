import React from 'react';
import {CardGroup,Card,Button,} from 'react-bootstrap';

const CurrentUserProduct = props => {
    return(
        <CardGroup>
                    <Card className="product-card">
                        <Card.Body>
                        <Card.Title className="card-title">Tech</Card.Title>
                        <Card.Text>
                        All about my product. All about my product. All about my product. All about my product.
                        </Card.Text>
                        </Card.Body>
                        <Button className="plan-button">View plan</Button>
                        <Card.Footer>
                        <small className="text-muted">added 2/9/2021</small>
                        </Card.Footer>
                    </Card>
                    <Card className="product-card">
                        <Card.Body>
                        <Card.Title className="card-title">Tech</Card.Title>
                        <Card.Text>
                        All about my product. All about my product. All about my product. All about my product.
                        </Card.Text>
                        </Card.Body>
                        <Button className="plan-button">View plan</Button>
                        <Card.Footer>
                        <small className="text-muted">added 2/9/2021</small>
                        </Card.Footer>
                    </Card>
                    <Card className="product-card">
                        <Card.Body>
                        <Card.Title className="card-title">Tech</Card.Title>
                        <Card.Text>
                        All about my product. All about my product. All about my product. All about my product.
                        </Card.Text>
                        </Card.Body>
                        <Button className="plan-button">View plan</Button>
                        <Card.Footer>
                        <small className="text-muted">added 2/9/2021</small>
                        </Card.Footer>
                    </Card>
                    </CardGroup>
    )
}

export default CurrentUserProduct;