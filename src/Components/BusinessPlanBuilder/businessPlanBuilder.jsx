import React, {Component} from 'react';
import {Jumbotron,Image} from 'react-bootstrap';
import whitelogo from '../../assets/images/whiteLogo.png';
import './businessPlanBuilder.css';

class BusinessPlanBuilder extends Component {
    constructor(props) {
      super(props)

      this.state = {
        //executive summary
        currentStep: 0,
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
  
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(event) {
      const {name, value} = event.target
      this.setState({
        [name]: value
      }) 
    }
  
    handleSubmit = (event) => {
      event.preventDefault()
      const { product } = this.state
      alert(`Your product (${product}), has been added to your profile! Congrats!!`)
    }
  
    render(){
        return(
            <div>
                <Jumbotron className="business-plan container">
                    <div className="center">
                        <Image src={whitelogo} height={80}></Image>
                    </div>
    
                    <h1 className="title">Turning your products into profit.</h1>
    
                    <div className="intro">
                        <h3 className="plan-title">Creating a business Plan.</h3>
                        <h5 className="body">A good business plan will guide you through every stage of starting and 
                        managing your business. You can think of it as a "roadmap." This map will get you
                        to your destination as long as you follow it closely. Your business plan should
                        dictate how you run your business, and include ways to help you grow it. 
                        Carefully think through every element of your business, put your thoughts in your plan
                        and reference them often. If you want funding for your products you'll need a solid plan. 
                        Make the investor believe in you and your abilities to turn your product into profits. "Your
                        business plan is the tool you’ll use to convince people that working with you — or 
                        investing in your company — is a smart choice." -SBA
                        </h5>
                        <br></br>
                        <h5 className="body">
                            We understand that creating a business plan can be a daunting task. Thats why we've created 
                            a template to help get your started. Our guide is broken down into 10 sections and easy to follow. Lets begin!
                        </h5>
                    </div>
    
                </Jumbotron>
            </div>
        )
    }
  }




export default BusinessPlanBuilder;