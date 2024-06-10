import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./components/Auth/Signup/SignupForm";
import LoginForm from "./components/Auth/Login/LoginForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
