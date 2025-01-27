import React from "react";

const Footer = () => {
  return React.createElement(
    "footer",
    null,
    React.createElement(
      "p",
      null,
      "2025 © Grupo Gtd. Todos los derechos reservados."
    ),
    React.createElement(
      "div",
      { style: { marginTop: "10px" } },
      React.createElement(
        "a",
        {
          href: "mailto:contacto@gtdcorporaciones.com",
          style: {
            color: "#ffcc00",
            textDecoration: "none",
            fontWeight: "bold",
          },
        },
        "contacto@grupogtd.com"
      )
    )
  );
};

export default Footer;
