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
    navigate("/"); // Cambia esta ruta según donde desees redirigir
  };

  return React.createElement(
    "div",
    {
      style: {
        height: "759px",
        display: "flex", // Usamos flexbox para centrar
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
          backgroundColor: "rgba(255, 255, 255, 0.95)", // Fondo translúcido
          padding: "60px 40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          width: "500px", // Ancho consistente para todos los elementos
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
              padding: "10px 0", // Tamaño consistente
              borderRadius: "5px 0 0 5px", // Bordes redondeados solo en un lado
              cursor: "pointer",
              fontWeight: "bold",
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
              borderRadius: "0 5px 5px 0", // Bordes redondeados solo en un lado
              cursor: "pointer",
              fontWeight: "bold",
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
            width: "95%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px", // Tamaño consistente para el texto
          },
          required: true,
        }),
        React.createElement("input", {
          type: "password",
          placeholder: "Contraseña",
          style: {
            width: "95%",
            padding: "10px",
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
              padding: "10px 0", // Altura consistente
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
              fontSize: "16px",
            },
          },
          "Iniciar Sesión"
        )
      )
    )
  );
};

export default LoginPage;
