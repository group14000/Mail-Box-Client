import React from "react";
import SignupForm from "./components/auth/SignupForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
