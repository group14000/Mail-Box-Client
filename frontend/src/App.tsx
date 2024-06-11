import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupForm from './components/auth/signup/SignupForm'
import LoginForm from './components/auth/login/LoginForm'
import MailLayout from './layout/MailLayout'

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <MailLayout/>
      <Routes>
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
