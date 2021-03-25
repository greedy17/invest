import React, {useState,useEffect} from 'react';
import {CardGroup,Card,Button,} from 'react-bootstrap';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {Link} from 'react-router-dom';

const CurrentUserProduct = props => {
    const [userInfo, setUserInfo] = useState([])
    const userApi = "http://localhost:5000/api/user/users/"
    var token = localStorage.getItem('jwtToken');

    const getUserInfo = () =>{
        if(token){
            var decoded = jwt_decode(token);
            const newUrl = userApi + decoded._id;
            axios.get(newUrl)
            .then( res => {
            console.log(res.data.products)    
            setUserInfo(res.data.products);
            })
        }
    }
    
    useEffect(() => {
       getUserInfo();
    },[]);
    
    return(
                <CardGroup>
                    {userInfo.map(product => 
                    <Card className="product-card">
                        <Card.Body>
                        <Card.Title className="card-title">{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        {product.plan > 0 ?(
                           <Button className="plan-button">View plan</Button>
                        ): <Button className="plan-button"><Link to="/businessPlan" className="white">Add plan</Link></Button>}
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">added 2/9/2021</small>
                        </Card.Footer>
                    </Card>
                        )}
                </CardGroup>
    )
}

export default CurrentUserProduct;