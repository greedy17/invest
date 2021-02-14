import React from 'react';
import {Form,Container,Jumbotron,Button} from 'react-bootstrap';
import './signUp.css';
import OwnerSignUp from './OwnerSignUp/ownerSignUp';
import InvestorSignUp from './InvestorSignUp/investorSignUp';

class SignUp extends React.Component {
    constructor(props){
      super(props)
      this.state={
        type: "select",
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    } 

  handleSubmit(event){
    event.preventDefault();
    this.setState({type: this.element.value})
    console.log(this.state.type)
  }
  
  render (){
      switch (this.state.type){
      case "select": 
        return (<React.Fragment><Form onSubmit={this.handleSubmit}>          
                 <Container className="center">
                    <Jumbotron className="jumbo">
                    <div className="center i-am"><h2>I am...</h2></div>
                    <Form.Control id="account" as="select" size="lg" ref={el => this.element = el}>
                        <option>Creating a product</option>
                        <option>Looking for investment opportunities</option>
                    </Form.Control>
                    <div className="center">
                        <Button type="submit" className="continue-button">Continue</Button>
                    </div>
                    </Jumbotron>
                </Container>    
                </Form></React.Fragment>);
      case "Creating a product":
        return (<React.Fragment><Form><OwnerSignUp/></Form></React.Fragment>);
      case "Looking for investment opportunities":
        return (<React.Fragment><Form><InvestorSignUp/></Form></React.Fragment>)  
      default: <div><h1>Page not found</h1></div>
    }
  }
}

export default SignUp;