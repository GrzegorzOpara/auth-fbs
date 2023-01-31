import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

const SignIn = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)

    const { signInUser } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => { 
        e.preventDefault()
        try {
            await signInUser(email, password)
            navigate('/profile')
            
        } catch (e) {
            setError(e.message)
            console.log(e)
        }

    }

    return (
        <Container fluid='md'>
            <Row className="justify-content-md-center">
                <Col md="4">
                    <h1 className='mb-4 text-center'>Sign In </h1>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Container>
                            <Row className="justify-content-md-center text-center">
                                <Button className='mb-3' variant="primary" type="submit">
                                    Sign In
                                </Button>
                                <p>
                                    Forgot you password? <Link to='/signUp'>Reset your password</Link>
                                </p>
                                <p>
                                    Not a member? <Link to='/signUp'>Sign up</Link>
                                </p>
                            </Row>
                        </Container>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn