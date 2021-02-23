import React, {useState} from 'react';
import {Card,Button,Badge} from 'react-bootstrap';
import axios from 'axios';

const Investors = props => {
    var [investors, setInvestors] = useState([])
    const usersApi = "http://localhost:5000/api/user/users/";

    axios.get(usersApi)
    .then(res => {
        setInvestors(res.data);
    })

    return(
        <div>
            {
            investors.map( investor =>
            investor.role === "investor" ?  
            (<Card className="display-card">
                <Card.Header as="h5">{investor.name} <span className="role-color">({investor.role})</span></Card.Header>
                <Card.Body>
                    <Card.Title>Has invested in <Badge variant="light">0</Badge> products on invest.</Card.Title>
                        <Card.Text>
                        Typically invests' in (most invested category).
                        </Card.Text>
                    <Button className="green space">investments</Button><Button variant="outline-warning">Msg</Button>
                </Card.Body>
            </Card>): null
            )}
        </div>
    )
}

export default Investors;