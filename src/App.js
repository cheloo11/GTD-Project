import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return React.createElement(
    Router,
    null,
    React.createElement(
      "div",
      { id: "root" },
      React.createElement(Navbar),
      React.createElement(
        "main",
        null,
        React.createElement(
          Routes,
          null,
          React.createElement(Route, {
            path: "/",
            element: React.createElement(HomePage),
          }),
          React.createElement(Route, {
            path: "/login",
            element: React.createElement(LoginPage),
          })
        )
      ),
      React.createElement(Footer)
    )
  );
};

export default App;
