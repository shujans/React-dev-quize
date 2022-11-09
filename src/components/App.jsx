import React from "react";
import "./style/App.css";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quize from "./pages/Quize";
import Result from "./pages/Result";
import { AuthProvider } from "../context/AuthContext";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/quize/:id"
              element={
                <PrivateRoute>
                  <Quize />
                </PrivateRoute>
              }
            />
            <Route
              path="/result/:id"
              element={
                <PrivateRoute>
                  <Result />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
