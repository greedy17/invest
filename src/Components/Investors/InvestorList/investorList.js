import React from 'react';
import {Card,Button,Badge} from 'react-bootstrap';

const InvestorList = ({investorList=[]}) => {
    return (
      <>
      { investorList.map((data,index) => {
          if (data.role === "investor") {
            return (
            <div className="container">
                <Card className="display-card">
                <Card.Header as="h5">{data.name} <span className="role-color">({data.role})</span></Card.Header>
                <Card.Body>
                    <Card.Title>Has invested in <Badge variant="light">0</Badge> products on invest.</Card.Title>
                        <Card.Text>
                        Typically invests' in (most invested category).
                        </Card.Text>
                    <Button className="green space">investments</Button><Button variant="outline-warning">Msg</Button>
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
  
  export default InvestorList 