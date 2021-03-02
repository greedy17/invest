import React from 'react';
import {Form,Col,Container,Jumbotron,Button} from 'react-bootstrap';
import {FiUser, FiMail, FiLock} from 'react-icons/fi';
import './investorSignUp.css';
import {Link, withRouter} from 'react-router-dom';
import useForm from '../../UseForm/useForm';
import axios from 'axios';

const InvestorSignUp = (props) => {

    const  register = (e) => {

        const url = "http://localhost:5000/api/user/users"

        const newUser = {
            name: values.name,
            email: values.email,
            password: values.password,
            bio: values.bio,
            role: 'investor',
        }
        
        axios.post(url, newUser)
        .then(res => {
            props.history.push('/login');
            console.log(res);
        })
        .catch(err => console.log(err));

    }

    const { values, handleSubmit, handleChange } = useForm(register);

    return(
        <div>
            <Container>
                <Form onSubmit={handleSubmit}>
                <Jumbotron className="investor-sign">
                    <div className="center investor"><h2>Investor sign up</h2></div>
                    <div className="investor-form">
                    <Form.Group controlId="name">
                        <Col className="icons">
                        <FiUser/><Form.Control className="field" type="text" name="name" placeholder="Name" required={true} value={values.name} onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Col className="icons">
                        <FiMail/><Form.Control className="field" type="email" name="email" placeholder="Email" required={true} value={values.email} onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Col className="icons">
                        <FiLock/><Form.Control className="field" type="password" name="password" placeholder="Password. 6 character minimum" value={values.password} onChange={handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="bio">
                        <Col className="icons">
                        <Form.Control as="textarea" className="field" type="text" name="bio" placeholder="Tell us a little bit about yourself." value={values.bio} onChange={handleChange}/>
                    </Col>
                </Form.Group>
                        <div className="center">
                            <Button type="submit" className="create">Create Account</Button>
                            <p className="sign-up"><Link className="sign-up" to='/login'>Already have an account ? Log in</Link></p>
                        </div>
                    </div>
                </Jumbotron>
                </Form>
            </Container>
        </div>
    )
}

export default withRouter (InvestorSignUp);