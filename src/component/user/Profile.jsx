import React from 'react'
// import { useState } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Avatar from './Avatar';

const backendUrl = process.env.REACT_APP_BACKEND_URL

const Profile = () => {

    const { user, signOutUser } = UserAuth();
    // const [error, setError] = useState(null)
    const navigate = useNavigate()

    const getProfileData = async () => {
        
    }

    const handleClick = async () => { 
        try {
            await signOutUser()
            navigate('/signin')
            
        } catch (e) {
            // setError(e.message)
            alert(e.message)
        }
    }

    return (
        <Container fluid='md'>
            <Row className="justify-content-md-center">
                <Col md="5">
                    <Container>
                        <Row className="justify-content-md-center text-center">
                            <h2 className='mt-4 text-center'>{user && user.email}</h2>
                            {!user.emailVerified && <p><i>email not verfied!</i></p> }
                            <Avatar className='mt-4' />
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
