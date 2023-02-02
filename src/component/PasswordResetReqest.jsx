import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';



const PasswordResetReqest = () => {
    const [email, setEmail] = useState(null)
    const [info, setInfo] = useState(null)

    const { userSendPasswordResetEmail } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => { 
        e.preventDefault()
        try {
            await userSendPasswordResetEmail(email)
            setInfo(`Reset link successfully sent to ${email}.`);
            setTimeout(() => { navigate("/") },3000);
        } catch (e) {
            // setError(e.message)
            if (e.message === 'Firebase: Error (auth/user-not-found).')
                setInfo(`This email dosen't exist in our records.`);
            else
                setInfo(`Something went wrong, please try again.`);
            setTimeout(() => { navigate("/") },3000);
        }
    
    }

    return (
        <Container fluid='md'>
            <Row className="justify-content-md-center">
                <Col md="4">
                    <h1 className='mb-4 text-center'>Forgot your password?</h1>
                    {info? 
                    <p className='mb-4 text-center'>
                        {info}
                    </p>
                    :
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Please enter the email address you use to sign in.</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Container>
                            <Row className="justify-content-md-center text-center">
                                <Button className='mb-3' variant="primary" type="submit">
                                    Request reset link
                                </Button>
                            </Row>
                            <p className="text-center">Back to <Link to='/signin'>Sign In</Link></p>
                        </Container>
                    </Form>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default PasswordResetReqest