import React, {Component} from 'react';
import Introduction from './Steps/Introduction/introduction';
import {Form} from 'react-bootstrap';
import StepOne from './Steps/stepOne/stepOne';
import StepTwo from './Steps/stepTwo/stepTwo';
import StepThree from './Steps/stepThree/stepThree';
import StepFour from './Steps/stepFour/stepFour';
import StepFive from './Steps/stepFive/stepFive';
import './businessPlanBuilder.css';

class BusinessPlanBuilder extends Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 0,
        //executive summary
        product: '',
        customers: '',
        vision: '',
        //company description
        missionStatement: '',
        principalMembers: '',
        primaryLocation: '',
        //market research
        industry: '',
        customerDescription: '',
        companyAdvantages: '',
        //service line
        serviceOrProduct: '',
        pricing: '',
        research: '',
        //marketing and sales
        growthStrategy: '',
        communication: '',
        howWillYouSale: '',
      }
      
      this._next = this._next.bind(this)
      this._prev = this._prev.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      }) 
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      alert('Your product has been added to your profile! Congrats!!')
    }

    _next() {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 1? currentStep +1: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
    
      _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 0? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
      }

      get previousButton(){
        let currentStep = this.state.currentStep;
        if(currentStep !== 0){
          return (
            <button 
            className="btn prev" 
            type="button" 
            onClick={this._prev}>
                Previous
            </button>
          )
        }
        return null;
      }
      
      get nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep < 5){
          return (
            <button 
            className="btn next" 
            type="button" 
            onClick={this._next}>
              Next
            </button> 
          )
        }
        return null;
      }
  
    render(){
        return(
            <React.Fragment>
                <Form onSubmit={this.handleSubmit}>
                <Introduction next={this.nextButton} currentStep={this.state.currentStep}></Introduction>
                <StepOne prev={this.previousButton} next={this.nextButton} currentStep={this.state.currentStep} handleChange={this.state.handleChange} product={this.state.product} customers={this.state.customers} vision={this.state.vision}></StepOne>
                <StepTwo prev={this.previousButton} next={this.nextButton} currentStep={this.state.currentStep} handleChange={this.state.handleChange} missionStatement={this.state.missionStatement} principalMembers={this.state.principalMembers} primaryLocation={this.state.primaryLocation}></StepTwo>
                <StepThree prev={this.previousButton} next={this.nextButton} currentStep={this.state.currentStep} handleChange={this.state.handleChange} industry={this.state.industry} customerDescription={this.state.customerDescription} companyAdvantages={this.state.companyAdvantages}></StepThree>
                <StepFour prev={this.previousButton} next={this.nextButton} currentStep={this.state.currentStep} handleChange={this.state.handleChange}  serviceOrProduct={this.state.serviceOrProduct} pricing={this.state.pricing} research={this.state.research}></StepFour>
                <StepFive prev={this.previousButton} next={this.nextButton} currentStep={this.state.currentStep} handleChange={this.state.handleChange} growthStrategy={this.state.growthStrategy}communication={this.state.communication} howWillYouSale={this.state.howWillYouSale}></StepFive>
                </Form>
            </React.Fragment>
        )
    }
  }

export default BusinessPlanBuilder;