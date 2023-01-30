import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />        
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App;
