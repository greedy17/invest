import React from 'react';
import {Jumbotron,Image,Dropdown,Badge,Card,CardGroup,Button,Container} from 'react-bootstrap';
import placeholder from '../../assets/images/placeholder.jpeg';
import './profile.css'

const Profile = () => {
    return(
        <div>
            <Jumbotron className="profile">
                <div className="bio">
                    <div>
                    <Image rounded src={placeholder} height={"170"}></Image>
                    </div>
                    <div className="top">
                        <div className="name">
                        <h3>Ed Roberson <span className="type">(owner)</span></h3>
                        <Dropdown className="notifications">
                        <Dropdown.Toggle className="toggle">
                        Notifications <Badge variant="light">3</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Orange
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        </div>
                        <div className="bio lorem">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fuga quos est ab magni, rerum temporibus exercitationem laboriosam dolor eius dicta suscipit excepturi perferendis. Laborum necessitatibus temporibus eaque alias accusamus.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <Jumbotron className="about">
            <div className="center">
                <h1 className="type products">Products</h1>
            </div>
            <Container>
                <CardGroup>
                <Card className="card">
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
                    <Card className="card">
                        <Card.Body>
                        <Card.Title className="card-title">Beauty</Card.Title>
                        <Card.Text>
                        All about my product. All about my product. All about my product. All about my product.
                        </Card.Text>
                        </Card.Body>
                        <Button className="plan-button">View plan</Button>
                        <Card.Footer>
                        <small className="text-muted">added 2/9/2021</small>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Body>
                        <Card.Title className="card-title">Fashion</Card.Title>
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
            </Container>     
            <div className="center">
            <Button className="add">Add product</Button>
            </div>
            </Jumbotron>

        </div>
    )
}

export default Profile; 