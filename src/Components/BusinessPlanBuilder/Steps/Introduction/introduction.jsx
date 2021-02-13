import React from 'react';
import {Jumbotron,Image} from 'react-bootstrap';
import whitelogo from '../../../../assets/images/whiteLogo.png';
import './introduction.css';

const Introduction = props => {
    if (props.currentStep !== 0) { 
      return null
    }else{
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
                    investing in your company — is a smart choice." -<span className="sba">Small Business Association</span>
                    </h5>
                    <br></br>
                    <h5 className="body">
                        We understand that creating a business plan can be a daunting task. Thats why we've created 
                        a template to help get your started. Our guide is broken down into <span className="sba">5</span> sections and easy to follow. Lets begin!
                    </h5>
                    <div className="next-button">
                        {props.next}
                    </div>
                </div>
            </Jumbotron>
        </div>
        )
    }
    
  }

  export default Introduction;
