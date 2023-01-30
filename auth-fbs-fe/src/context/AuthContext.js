import { useContext, createContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
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

    const signOutUser = ( ) => {
        return signOut(auth)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
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
        signOutUser: signOutUser
    }

    return (
        <UserContext.Provider value={{contextData}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
};