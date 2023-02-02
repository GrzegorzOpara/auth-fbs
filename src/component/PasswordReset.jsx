import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';



const PasswordReset = () => {
    const [email, setEmail] = useState(null)

    const { signInUser } = UserAuth()

    const handleSubmit = async (e) => { 
        e.preventDefault()
        try {
    
            
            
        } catch (e) {
            // setError(e.message)
            console.log(e)
        }
    
    }

    return (
        <Container fluid='md'>
            <Row className="justify-content-md-center">
                <Col md="4">
                    <h1 className='mb-4 text-center'>Reset password</h1>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>New password</Form.Label>
                            <Form.Control type="password" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Container>
                            <Row className="justify-content-md-center text-center">
                                <Button className='mb-3' variant="primary" type="submit">
                                    Reset password
                                </Button>
                            </Row>
                            <p className="text-center">Back to <Link to='/signin'>Sign In</Link></p>
                        </Container>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default PasswordReset