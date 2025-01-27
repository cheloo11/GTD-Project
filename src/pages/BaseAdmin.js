import React, { useState } from "react";

const BaseDeConocimientosAdmin = () => {
  const servicios = [
    {
      id: 1,
      nombre: "Implementación y Gestión de Infraestructura Cloud (IaaS)",
      informacion:
        "Ofrecemos servicios de infraestructura en la nube, como servidores virtuales, almacenamiento, redes y sistemas operativos, bajo demanda y escalables.",
    },
    {
      id: 2,
      nombre: "Servicio de Seguridad Gestionada",
      informacion:
        "Protegemos tus sistemas y datos con nuestro servicio de seguridad gestionada. Monitoreamos tu red las 24 horas, los 7 días de la semana.",
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showAgregarModal, setShowAgregarModal] = useState(false); // Modal para agregar servicio

  const handleServiceClick = (servicio) => {
    setServicioSeleccionado(servicio);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setServicioSeleccionado(null);
  };

  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      },
    },
    React.createElement(
      "main",
      {
        style: {
          flex: 1,
          display: "flex",
          padding: "20px",
        },
      },
      // Área de búsqueda, botón de agregar y servicios
      React.createElement(
        "div",
        {
          style: {
            flex: 3,
            display: "flex",
            flexDirection: "column",
          },
        },
        // Barra de búsqueda con botón de agregar
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            },
          },
          React.createElement("input", {
            type: "text",
            placeholder: "Buscar servicios...",
            style: {
              flex: 1,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "20px",
              fontSize: "14px",
            },
          }),
          React.createElement(
            "button",
            {
              onClick: () => setShowAgregarModal(true),
              style: {
                marginLeft: "10px",
                padding: "10px 20px",
                backgroundColor: "#0073e6",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              },
            },
            "Agregar Servicio"
          )
        ),
        // Lista de servicios
        React.createElement(
          "div",
          {
            style: {
              flex: 1,
              border: "1px solid #0073e6",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
              overflowY: "auto",
              maxHeight: "600px",
            },
          },
          React.createElement(
            "ul",
            {
              style: {
                listStyle: "none",
                padding: 0,
                margin: 0,
              },
            },
            servicios.map((servicio) =>
              React.createElement(
                "li",
                {
                  key: servicio.id,
                  onClick: () => handleServiceClick(servicio),
                  style: {
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                    cursor: "pointer",
                  },
                },
                servicio.nombre
              )
            )
          )
        )
      ),
      // Menú de filtro
      React.createElement(
        "div",
        {
          style: {
            flex: 1,
            marginLeft: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            maxWidth: "300px", // Máximo ancho para evitar que se extienda demasiado\
            maxHeight: "659px",
          },
        },
        React.createElement(
          "h3",
          {
            style: {
              marginBottom: "10px",
              color: "#0073e6",
              fontSize: "1.2em",
              textAlign: "center", // Centrado en pantallas más pequeñas
            },
          },
          "Filtrar por:"
        ),
        Object.entries({
          Conectividad: [
            "Servicios de conectividad",
            "Servicios de conectividad administrados",
            "Conectividad Satelital",
            "Comunicaciones unificadas",
          ],
          Seguridad: [
            "Backup as a Service (BaaS)",
            "Seguridad Gestionada",
            "Disaster Recovery as a Service (DaaS)",
          ],
          Multicloud: [
            "Servicios de data Center y Hosting",
            "Productividad y colaboración",
            "Gtd Cloud",
            "Servicios adicionales",
          ],
          "Transformación digital": [
            "Servicios IoT",
            "Inteligencia de datos",
            "Soluciones OT",
            "Soluciones digitales",
          ],
        }).map(([categoria, filtros], index) =>
          React.createElement(
            "div",
            { key: index, style: { marginBottom: "10px" } },
            React.createElement(
              "button",
              {
                style: {
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  textAlign: "left",
                  fontWeight: "bold",
                },
                onClick: () =>
                  setActiveCategory((prev) =>
                    prev === categoria ? null : categoria
                  ),
              },
              categoria
            ),
            activeCategory === categoria &&
              React.createElement(
                "div",
                {
                  style: {
                    marginTop: "10px",
                    marginLeft: "10px",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    backgroundColor: "#f4f4f4",
                  },
                },
                filtros.map((filtro, idx) =>
                  React.createElement(
                    "div",
                    { key: idx, style: { marginBottom: "5px" } },
                    React.createElement("input", {
                      type: "checkbox",
                      id: `checkbox-${categoria}-${idx}`,
                      style: { marginRight: "10px" },
                    }),
                    React.createElement(
                      "label",
                      { htmlFor: `checkbox-${categoria}-${idx}` },
                      filtro
                    )
                  )
                )
              )
          )
        ),
        React.createElement(
          "div",
          {
            style: {
              marginTop: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center", // Centrado en pantallas pequeñas
              gap: "10px",
            },
          },
          React.createElement(
            "button",
            {
              style: {
                flex: 1,
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#0073e6",
                color: "#fff",
                cursor: "pointer",
              },
              onClick: () => setActiveCategory(null),
            },
            "Limpiar filtro"
          ),
          React.createElement(
            "button",
            {
              style: {
                flex: 1,
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#0073e6",
                color: "#fff",
                cursor: "pointer",
              },
            },
            "Filtrar"
          )
        )
      )
    ),
    // Modal para visualizar información de un servicio
    // Modal
    modalVisible &&
      servicioSeleccionado &&
      React.createElement(
        "div",
        {
          style: {
            /* Estilos del fondo del modal (sin cambios) */
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            /* Estilos del contenedor del modal */
          },
        },
        React.createElement(
          "div",
          {
            className: "modal-content",
            style: {
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "80%" /* Aumenta el tamaño máximo */,
              maxHeight: "80%" /*Aumenta la altura máxima */,
              overflow:
                "auto" /* Agrega scroll si el contenido es muy grande */,
            },
          },
          React.createElement("h3", null, servicioSeleccionado.nombre),
          React.createElement("p", null, servicioSeleccionado.informacion),
          React.createElement(
            "button",
            {
              onClick: closeModal,
              className: "modal-close",
              style: {
                backgroundColor: "#0073e6",
                border: "none",
                color: "#fff",
                padding: "5px",
                margin: "5px",
                borderRadius: "4px",
              },
            },
            "❌"
          )
        )
      ),
    // Modal para agregar un nuevo servicio
    showAgregarModal &&
      React.createElement(
        "div",
        {
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        },
        React.createElement(
          "div",
          {
            style: {
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "400px",
              width: "100%",
            },
          },
          React.createElement(
            "h3",
            { style: { textAlign: "center", marginBottom: "10px" } },
            "Agregar Nuevo Servicio"
          ),
          React.createElement("input", {
            type: "text",
            placeholder: "Nombre del servicio",
            style: {
              width: "93%",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            },
          }),
          React.createElement("textarea", {
            placeholder: "Descripción del servicio",
            style: {
              width: "93%",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            },
          }),
          React.createElement("input", {
            type: "file",
            multiple: true,
            style: {
              marginBottom: "10px",
            },
          }),
          React.createElement(
            "select",
            {
              style: {
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              },
            },
            [
              React.createElement(
                "option",
                { value: "" },
                "Selecciona una categoría"
              ),
              React.createElement(
                "option",
                { value: "Conectividad" },
                "Conectividad"
              ),
              React.createElement(
                "option",
                { value: "Seguridad" },
                "Seguridad"
              ),
              React.createElement(
                "option",
                { value: "Multicloud" },
                "Multicloud"
              ),
              React.createElement(
                "option",
                { value: "Transformación digital" },
                "Transformación Digital"
              ),
            ]
          ),
          React.createElement(
            "button",
            {
              style: {
                backgroundColor: "#0073e6",
                color: "#fff",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                marginBottom: "10px",
              },
            },
            "Guardar"
          ),
          React.createElement(
            "button",
            {
              onClick: () => setShowAgregarModal(false),
              style: {
                backgroundColor: "#ccc",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              },
            },
            "Cancelar"
          )
        )
      )
  );
};

export default BaseDeConocimientosAdmin;
