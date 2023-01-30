import React from 'react'
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const { user, signOutUser } = UserAuth();
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleClick = async () => { 
        try {
            await signOutUser()
            navigate('/signin')
            
        } catch (e) {
            setError(e.message)
            console.log(e)
        }
    }

    return (
        <Container fluid='md'>
            <Row className="justify-content-md-center">
                <Col md="4">
                    <h1 className='mb-4 text-center'>Welcome, {user && user.email}</h1>
                    <Container>
                        <Row className="justify-content-md-center text-center">
                            <Button className='mb-3' variant="primary" onClick={ () => handleClick() }>
                                Log out
                            </Button>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile
