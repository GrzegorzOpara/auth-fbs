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

        let isCancelled = false;
        const handleVerifyEmail = async () => {
            try {
                await checkEmailValidation(searchParams.get('oobCode'))
                if (!isCancelled) {
                    setVerificationStatus(true)
                    console.log('there')
                }
            } catch (e) {
                if (!isCancelled) {
                    console.log('here')
                    setError(e.message)
                }
            }           
        }

        handleVerifyEmail()

        return () => {
            isCancelled = true
        }
    },[])
    

    return (
        <Container fluid='md'>
            <Row className="justify-content-md-center">
                <Col md="5">
                    <h1 className='mb-4 text-center'>Email verification</h1>
                    {verificationStatus? <p className='text-center'>Thank you for veryfing your email, please proceed to <Link to='/signin'>sign in</Link> page.</p> : null}
                    {error? <p className='text-center'>An error occured: <b>{error}</b>, please try again.</p>: null}
                </Col>
            </Row>
        </Container>
    )
}

export default VerifyEmail