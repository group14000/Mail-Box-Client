import React from "react";
import SignupForm from "./components/auth/SignupForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignupForm />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <p>Hi</p>
    // </div>
  );
};

export default App;
