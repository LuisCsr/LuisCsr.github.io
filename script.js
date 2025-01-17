// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Efecto de transición suave en la carga de la página
  document.body.style.transition = "background-color 0.5s ease";

  // Cambio de color de fondo al pasar el mouse sobre los servicios
  const services = document.querySelectorAll(".service");
  services.forEach((service) => {
    service.addEventListener("mouseenter", () => {
      service.style.transform = "scale(1.1)";
      service.style.transition = "transform 0.3s ease-in-out";
    });
    service.addEventListener("mouseleave", () => {
      service.style.transform = "scale(1)";
    });
  });

  // Efecto de animación de texto en el header
  const header = document.querySelector("header h1");
  header.classList.add("fade-in");
  setTimeout(() => {
    header.classList.remove("fade-in");
  }, 2000);

  // Agregar animación al hacer clic en un servicio (para destacar)
  services.forEach((service) => {
    service.addEventListener("click", () => {
      service.style.transform = "scale(1.2)";
      setTimeout(() => {
        service.style.transform = "scale(1)";
      }, 500);
    });
  });

  // Añadir scroll suave al hacer clic en el botón "Empieza ahora"
  const whatsappBtn = document.querySelector(".whatsapp-btn");
  whatsappBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://wa.me/5710339514", "_blank");
  });

  // Efecto de sombra en las tarjetas de servicios al hacer hover
  services.forEach((service) => {
    service.addEventListener("mouseenter", () => {
      service.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    });
    service.addEventListener("mouseleave", () => {
      service.style.boxShadow = "none";
    });
  });

  // Animación de carga en los servicios
  const serviceGrid = document.querySelector(".service-grid");
  serviceGrid.classList.add("fade-in-grid");
});

// Función para activar animaciones en el CSS
const addCSSAnimations = () => {
  const style = document.createElement("style");
  style.innerHTML = `
        /* Animación para el fade-in del texto */
        .fade-in {
            opacity: 0;
            animation: fadeIn 2s forwards;
        }
        @keyframes fadeIn {
            to {
                opacity: 1;
            }
        }

        /* Animación de la cuadrícula de servicios */
        .fade-in-grid {
            opacity: 0;
            animation: fadeInGrid 1.5s forwards;
        }
        @keyframes fadeInGrid {
            to {
                opacity: 1;
            }
        }

        /* Estilos de transición de escala */
        .service {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
        }

        /* Sombra de la tarjeta */
        .service:hover {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        /* Botón de WhatsApp */
        .whatsapp-btn {
            background-color: #25D366;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }

        .whatsapp-btn:hover {
            background-color: #128C7E;
        }
    `;
  document.head.appendChild(style);
};

// Llamamos a la función para añadir animaciones CSS
addCSSAnimations();