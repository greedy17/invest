import React from 'react';
import {Card,Button,Badge} from 'react-bootstrap';
import CenteredModal from '../../Modals/centeredModal';
import {Link} from 'react-router-dom';

const InvestorList = ({investorList=[]}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [myName,setMyName] = React.useState('');

  const whatsMyName = me => {
    setMyName(me);
    setModalShow(true)
  }
    return (
      <>
      { investorList.map((data,index) => {
          if (data.role === "investor") {
            return (
            <div className="container" id={data._id}>
                <Card className="display-card">
                <Card.Header as="h5">{data.name} <span className="role-color">({data.role})</span></Card.Header>
                <Card.Body>
                    <Card.Title>Has invested in <Badge variant="light">0</Badge> products on invest.</Card.Title>
                        <Card.Text>
                        Typically invests' in (most invested category).
                        </Card.Text>
                    <Button className="green space" onClick={() => whatsMyName(data.name)} >investments</Button><Link to="/messenger"><Button variant="outline-warning">Message</Button></Link>
                    <CenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    name={myName}
                    />
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