import React from 'react';
import {Jumbotron,Image,Dropdown,Badge,Table,Button} from 'react-bootstrap';
import placeholder from '../../assets/images/placeholder.jpeg';
import './profile.css'

const Profile = () => {
    return(
        <div>
            <Jumbotron className="profile">
                <div className="top">
                    <Image roundedCircle src={placeholder} height={"175"}></Image>
                    <div className="name">
                    <h3>Ed Roberson <span>(owner)</span></h3>
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
                </div>
            </Jumbotron>

            <Jumbotron className="about">
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Product</th>
                <th>Progress</th>
                <th>Goal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>tech</td>
                <td>7k</td>
                <td>32k</td>
                </tr>
                <tr>
                <td>2</td>
                <td>beauty</td>
                <td>$500</td>
                <td>7k</td>
                </tr>
                <tr>
                <td>3</td>
                <td>clothing</td>
                <td>2k</td>
                <td>5.5k</td>
                </tr>
            </tbody>
            </Table>
            <div className="center">
            <Button className="green add">Add product</Button>
            </div>
            </Jumbotron>

        </div>
    )
}

export default Profile; 