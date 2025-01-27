import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Determinar si el usuario está logueado
  const isLoggedIn =
    location.pathname === "/base-de-conocimientos" ||
    location.pathname === "/admin/base-de-conocimientos";

  return React.createElement(
    "nav",
    null,
    React.createElement("h1", null, "Base de Conocimientos"),
    React.createElement(
      "a",
      {
        href: isLoggedIn ? "/logout" : "/login",
        style: {
          color: "#ffffff",
          textDecoration: "none",
          fontWeight: "bold",
        },
      },
      isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"
    )
  );
};

export default Navbar;
