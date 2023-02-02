import React from 'react'
import { useSearchParams } from 'react-router-dom'
import VerifyEmail from '../component/VerifyEmail';
import PasswordResetReqest from '../component/PasswordResetReqest'
import PasswordReset from '../component/PasswordReset'

const UserSelfService = () => {

    const [searchParams] = useSearchParams();

    switch (searchParams.get('mode')) {
        case 'resetPassword':
          return (
            <PasswordReset />
          )
        case 'verifyEmail':
          return (
            <VerifyEmail />
          )
        case 'resetRequest':
          return (
            <PasswordResetReqest />
          )
        default:
          alert('Something went wrong, please try again.')
      }
}

export default UserSelfService