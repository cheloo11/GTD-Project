import React from "react";

const HomePage = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "header",
      { className: "home-header" },
      React.createElement("img", {
        src: "/gtded.jpg",
        alt: "Logo Corporaciones",
        className: "home-header-image",
      }),
      React.createElement(
        "div",
        { className: "home-header-text-container" },
        React.createElement(
          "h1",
          { className: "home-header-title" },
          "Grupo Gtd"
        )
      )
    ),
    React.createElement(
      "section",
      { className: "welcome" },
      React.createElement(
        "h2",
        { className: "welcome-title" },
        "Bienvenidos a la Base de Conocimientos"
      ),
      React.createElement(
        "p",
        { className: "welcome-text" },
        "En esta página podrás acceder a toda la información sobre los servicios de corporaciones de Gtd."
      ),
      React.createElement(
        "button",
        {
          className: "welcome-button",
          onClick: () => {
            window.location.href = "/login";
          },
          onMouseOver: (e) => {
            e.target.classList.add("button-hover");
          },
          onMouseOut: (e) => {
            e.target.classList.remove("button-hover");
          },
        },
        "Acceder a la base de conocimientos"
      )
    )
  );
};

export default HomePage;
