import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Routes>
        <Route path="/" element={<h1 className="text-3xl text-center mt-10">Login Page</h1>} />
        <Route path="/register" element={<h1 className="text-3xl text-center mt-10">Register Page</h1>} />
        <Route path="/dashboard" element={<h1 className="text-3xl text-center mt-10">Dashboard</h1>} />
      </Routes>

    </div>
  );
}

export default App;