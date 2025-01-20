import React from "react";

const Navbar = () => {
  return React.createElement(
    "nav",
    null,
    React.createElement("h1", null, "Base de Conocimientos"),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "a",
        {
          href: "/",
          style: {
            color: "#ffffff",
            textDecoration: "none",
            marginRight: "15px",
          },
        },
        "Inicio"
      ),
      React.createElement(
        "a",
        { href: "/login", style: { color: "#ffffff", textDecoration: "none" } },
        "Iniciar Sesión"
      )
    )
  );
};

export default Navbar;
