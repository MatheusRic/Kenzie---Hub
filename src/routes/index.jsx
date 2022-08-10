import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import SignUp from "../pages/signUp";

const RoutesMain = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("@token");
    if (!token) {
      setAuthentication(false);
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Login setAuthentication={setAuthentication} />}
      />
      <Route path="/signUp" element={<SignUp />} />
      <Route
        path="/home"
        element={<Home setAuthentication={setAuthentication} />}
      />
    </Routes>
  );
};

export default RoutesMain;
