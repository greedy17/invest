import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import InvestModal from '../../Modals/investModal';

const ProductList = ({productList=[]}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [myName,setMyName] = React.useState('');

  const whatsMyName = me => {
    setMyName(me);
    setModalShow(true)
  }
    return (
      <>
      { productList.map((data,index) => {
          if (data) {
            return (
            <div key={data._id} className="container">
                <Card className="display-card">
                    <Card.Header as="h5" className="name-color">{data.name} <span className="role-color">({data.category})</span></Card.Header>
                    <Card.Body>
                        <Card.Title className="color-green">~ ${data.progress} / ${data.goal} goal~</Card.Title>
                        <Card.Text>
                        {data.description}
                        </Card.Text>
                        <Link to="/messenger"><Button className="product-button">Message Owner</Button></Link><Button className="product-button" onClick={() => whatsMyName(data.name)}>Invest</Button>
                        <InvestModal
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
  
  export default ProductList 