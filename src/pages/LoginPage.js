import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [role, setRole] = useState("Empleado");
  const navigate = useNavigate();

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { role });

    // Redirigir según el rol seleccionado
    if (role === "Empleado") {
      navigate("/base-de-conocimientos");
    } else if (role === "Administrativo") {
      navigate("/admin/base-de-conocimientos");
    }
  };

  return React.createElement(
    "div",
    {
      style: {
        height: "100vh", // Ocupa toda la altura de la pantalla
        display: "flex", // Flexbox para centrar
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },
    },
    React.createElement(
      "div",
      {
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo translúcido
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          width: "90%", // Ancho ajustable
          maxWidth: "400px", // Máximo ancho para evitar agrandarse en pantallas grandes
        },
      },
      React.createElement(
        "h2",
        { style: { color: "#0073e6", marginBottom: "20px" } },
        "Iniciar Sesión"
      ),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          },
        },
        React.createElement(
          "button",
          {
            onClick: () => handleRoleChange("Empleado"),
            style: {
              flex: 1, // Ambos botones ocupan el mismo espacio
              backgroundColor: role === "Empleado" ? "#0073e6" : "#ffffff",
              color: role === "Empleado" ? "#ffffff" : "#0073e6",
              border: "2px solid #0073e6",
              padding: "10px 0",
              borderRadius: "5px 0 0 5px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease", // Efecto suave al pasar de un rol a otro
            },
          },
          "Empleado"
        ),
        React.createElement(
          "button",
          {
            onClick: () => handleRoleChange("Administrativo"),
            style: {
              flex: 1,
              backgroundColor:
                role === "Administrativo" ? "#0073e6" : "#ffffff",
              color: role === "Administrativo" ? "#ffffff" : "#0073e6",
              border: "2px solid #0073e6",
              padding: "10px 0",
              borderRadius: "0 5px 5px 0",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease", // Efecto suave al pasar de un rol a otro
            },
          },
          "Administrativo"
        )
      ),
      React.createElement(
        "form",
        { onSubmit: handleSubmit },
        React.createElement("input", {
          type: "email",
          placeholder: "Correo electrónico",
          style: {
            width: "93%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          },
          required: true,
        }),
        React.createElement("input", {
          type: "password",
          placeholder: "Contraseña",
          style: {
            width: "93%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          },
          required: true,
        }),
        React.createElement(
          "button",
          {
            type: "submit",
            style: {
              backgroundColor: "#0073e6",
              color: "#ffffff",
              padding: "12px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
              fontSize: "16px",
              transition: "background-color 0.3s ease", // Efecto de transición al hover
            },
            onMouseEnter: (e) => (e.target.style.backgroundColor = "#005bb5"),
            onMouseLeave: (e) => (e.target.style.backgroundColor = "#0073e6"),
          },
          "Iniciar Sesión"
        )
      )
    )
  );
};

export default LoginPage;
