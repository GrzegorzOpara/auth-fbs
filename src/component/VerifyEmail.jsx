import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import { UserAuth } from '../context/AuthContext';

const VerifyEmail = () => {

    const [searchParams] = useSearchParams();
    const [verificationStatus, setVerificationStatus] = useState(false)
    const [error, setError] = useState(null)
    const { checkEmailValidation } = UserAuth()


    useEffect(() => {
        const handleVerifyEmail = async () => {
            // try {
            //     await checkEmailValidation(searchParams.get('oobCode'))
            //     setVerificationStatus(true)
            //     console.log('Verfication completed')
            // } catch (e) {
            //     setError(e.message)
            //     console.log('Verfication failed')
            // }
            console.log('here')
        }
    
      return () => {
        handleVerifyEmail()
      }
    }, [])
    

    return (
        <Container fluid='md'>
            <Row className="justify-content-md-center">
                <Col md="5">
                    <h1>Email verification</h1>
                    {verificationStatus? <p>Thank you for veryfing your email, please proceed to <Link to='/signin'>sign in</Link> page.</p> : null}
                    {error? <p>An error occured: <b>{error}</b>, please try again.</p>: null}
                </Col>
            </Row>
        </Container>
    )
}

export default VerifyEmail