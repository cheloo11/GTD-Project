import React, { useState } from "react";

const BaseDeConocimientos = () => {
  const servicios = [
    {
      id: 1,
      nombre: "Implementación y Gestión de Infraestructura Cloud (IaaS)",
      informacion:
        "Ofrecemos servicios de infraestructura en la nube, como servidores virtuales, almacenamiento, redes y sistemas operativos, bajo demanda y escalables. Nos encargamos de la gestión, el mantenimiento y la seguridad de la infraestructura, permitiéndote enfocarte en tus aplicaciones y datos. Este servicio es ideal para empresas que buscan flexibilidad, agilidad y reducción de costos en su infraestructura TI. Adaptamos las soluciones a tus necesidades, ya sea que requieras un entorno de desarrollo, producción o disaster recovery.",
    },
    {
      id: 2,
      nombre: "Servicio de Seguridad Gestionada",
      informacion:
        "Protegemos tus sistemas y datos con nuestro servicio de seguridad gestionada. Monitoreamos tu red las 24 horas, los 7 días de la semana, para detectar y responder a amenazas en tiempo real. Implementamos firewalls, sistemas de detección de intrusos, antivirus y otras herramientas de seguridad de última generación. Además, te asesoramos en la creación e implementación de directivas de seguridad robustas que aseguran el cumplimiento de las mejores prácticas y regulaciones.",
    },
    {
      id: 3,
      nombre: "Desarrollo de Aplicaciones a Medida",
      informacion:
        "Creamos software a la medida de tus necesidades empresariales. Analizamos tus procesos y requerimientos para diseñar, desarrollar y implementar soluciones de software que optimicen tu flujo de trabajo y te ayuden a alcanzar tus objetivos. Utilizamos metodologías ágiles para garantizar la entrega rápida de valor. Ofrecemos servicios de desarrollo web, móvil y de escritorio, utilizando tecnologías modernas y robustas. Nos encargamos de todo el ciclo de vida del desarrollo, desde la concepción hasta el despliegue y mantenimiento.",
    },
    {
      id: 4,
      nombre: "Soporte Técnico TI Help Desk",
      informacion:
        "Nuestro servicio de Help Desk brinda soporte técnico especializado a tus usuarios, resolviendo incidencias y problemas técnicos de hardware, software y redes. Ofrecemos diferentes canales de atención, como teléfono, correo electrónico y chat, para una rápida resolución. Nos encargamos de gestionar las incidencias, dar seguimiento y documentar las soluciones. Nos enfocamos en maximizar la disponibilidad y el rendimiento de tus herramientas y garantizar así la operación optima de los trabajadores de tu negocio.",
    },
    {
      id: 5,
      nombre: "Consultoría en Transformación Digital",
      informacion:
        "Acompañamos a tu empresa en su proceso de transformación digital. Analizamos tu situación actual, identificamos oportunidades de mejora e implementamos estrategias digitales que te permitan optimizar tus operaciones, innovar y aumentar tu competitividad. Te ayudamos a integrar nuevas tecnologías, mejorar la experiencia del cliente y adaptar tu modelo de negocio a la era digital, así aprovecharas el 100% del mundo tecnológico y aplicarlo a tu empresa.",
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

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
      // Área de búsqueda y servicios
      React.createElement(
        "div",
        {
          style: {
            flex: 3,
            display: "flex",
            flexDirection: "column",
          },
        },
        // Barra de búsqueda
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
          })
        ),
        // Área de servicios
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
          },
        },
        React.createElement(
          "h3",
          { style: { marginBottom: "10px", color: "#0073e6" } },
          "Filtrar por:"
        ),
        ["Tipo de servicio", "Tecnología", "Uso", "Características"].map(
          (filtro, index) =>
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
                  },
                },
                filtro
              )
            )
        ),
        // Botones de filtro
        React.createElement(
          "div",
          { style: { marginTop: "20px" } },
          React.createElement(
            "button",
            {
              style: {
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#0073e6",
                color: "#fff",
                cursor: "pointer",
                marginRight: "10px",
              },
            },
            "Limpiar filtro"
          ),

          React.createElement(
            "button",
            {
              style: {
                padding: "10px 20px",
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
      )
  );
};

export default BaseDeConocimientos;
