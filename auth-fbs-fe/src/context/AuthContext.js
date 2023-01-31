import { useContext, createContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification } from 'firebase/auth'
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
        sendVerificationEmail: sendVerificationEmail
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