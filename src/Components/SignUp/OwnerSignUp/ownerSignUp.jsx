import React from 'react';
import axios from 'axios';
import {Form,Col,Container,Jumbotron,Button} from 'react-bootstrap';
import {FiUser, FiMail, FiLock} from 'react-icons/fi';
import {Link, withRouter} from 'react-router-dom';
import useForm from '../../UseForm/useForm';
import './ownerSignUp.css';

const OwnerSignUp = (props) => {

    const  register = (e) => {

        const url = "http://localhost:5000/api/user/users"

        const newUser = {
            name: values.name,
            email: values.email,
            password: values.password,
            bio: values.bio,
            role: 'owner',
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
                <Jumbotron className="owner-sign">
                <div className="center owner"><h2>Owner sign up</h2></div>
                <div className="owner-form">
                <Form.Group controlId="name">
                    <Col className="icons">
                    <FiUser/><Form.Control className="field" type="text" name="name" placeholder="Name" required={true} value={values.name} onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="email">
                    <Col className="icons">
                    <FiMail/><Form.Control className="field" type="email" name="email" placeholder="Email" required={true} value={values.email} onChange={handleChange}/>
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
                        <Button className="create" type="submit">Create Account</Button>
                        <p className="sign-up"><Link className="sign-up" to='/login'>Already have an account ? Log in</Link></p>
                    </div>
                </div>
                </Jumbotron>
                </Form>
            </Container>
        </div>
    )
}

export default withRouter (OwnerSignUp);