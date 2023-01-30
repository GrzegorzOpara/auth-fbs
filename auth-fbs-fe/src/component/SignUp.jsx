import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';

const SignUp = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)

    const { signUpUser } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => { 
        e.preventDefault()
        try {
            await signUpUser(email, password)
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
                    <h1 className='mb-4 text-center'>Sign Up</h1>
                    <Form onSubmit={(e) => handleSubmit(e)}> 
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Container>
                            <Row className="justify-content-md-center text-center">
                                <Button className='mb-3' variant="primary" type="submit">
                                    Sign Up
                                </Button>
                                <p>
                                    Already have an account? <Link to='/signin'>Sign in</Link>
                                </p>
                            </Row>
                        </Container>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
    }

export default SignUp