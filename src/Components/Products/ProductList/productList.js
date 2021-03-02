import React from 'react';
import {Card,Button} from 'react-bootstrap';

const ProductList = ({productList=[]}) => {
    return (
      <>
      { productList.map((data,index) => {
          if (data) {
            return (
            <div key={data._id} className="container">
                <Card className="display-card">
                    <Card.Header as="h5">{data.name} <span className="role-color">({data.category})</span></Card.Header>
                    <Card.Body>
                        <Card.Title className="role-color">~ ${data.progress} / ${data.goal} goal~</Card.Title>
                        <Card.Text>
                        {data.description}
                        </Card.Text>
                        <Button className="green space">Msg Owner</Button><Button variant="outline-warning">Invest</Button>
                    </Card.Body>
                </Card>
            </div>  	
             )	
           }
           return null
      }) }
      </>
    );
  }
  
  export default ProductList 