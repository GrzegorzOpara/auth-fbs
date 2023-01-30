import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function SignUp() {
  return (
    <Container fluid='md'>
        <Row className="justify-content-md-center">
            <Col md="4">
                <h1 className='mb-4 text-center'>Sign Up</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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