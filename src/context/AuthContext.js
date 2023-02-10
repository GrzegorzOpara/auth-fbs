import { useContext, createContext, useState, useEffect } from 'react'
import { 
        applyActionCode, 
        sendPasswordResetEmail, 
        verifyPasswordResetCode, 
        confirmPasswordReset,
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut, 
        onAuthStateChanged, 
        sendEmailVerification,
        updateProfile
    } from 'firebase/auth'
import { auth } from '../firebase'

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const sendVerificationEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const checkEmailValidation = (oobCode) => {
        return applyActionCode(auth, oobCode)
    }

    const userSendPasswordResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const userVerifyPasswordResetCode = (oobCode) => {
        return verifyPasswordResetCode(auth, oobCode)
    }

    const userConfirmPasswordReset = (oobCode, password) => {
        return confirmPasswordReset(auth, oobCode, password)
    }

    const updateUser = (props) => {
        return updateProfile(auth.currentUser, props)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
      })
      return () => {
        unsubscribe()
      }
    }, [])
    
    const contextData = {
        user: user,
        signInUser: signInUser,
        signUpUser: signUpUser,
        signOutUser: signOutUser,
        sendVerificationEmail: sendVerificationEmail,
        checkEmailValidation: checkEmailValidation,
        userSendPasswordResetEmail: userSendPasswordResetEmail,
        userVerifyPasswordResetCode: userVerifyPasswordResetCode,
        userConfirmPasswordReset: userConfirmPasswordReset,
        updateUser: updateUser
    }

    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
};