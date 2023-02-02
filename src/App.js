import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import Profile from './component/Profile';
import PrivateRoutes from './utils/PrivateRoutes';
import UserSelfService from './component/UserSelfService'

function App() {

  return (    
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />        
          <Route path="/userselfservice/*" element={<UserSelfService />}/>
          <Route element={<PrivateRoutes />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App;
