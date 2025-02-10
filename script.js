document.addEventListener("DOMContentLoaded", function () {
  // Translation resources for English and Spanish
  const resources = {
    en: {
      translation: {
        nav: {
          home: "Home",
          about: "About",
          services: "Services",
          portfolio: "Portfolio",
          blog: "Blog",
          contact: "Contact"
        },
        home: {
          title: "Welcome to the Future of Innovation",
          subtitle:
            "Where cutting-edge 3D fabrication meets art and business excellence."
        },
        about: {
          title: "About Me",
          description:
            "I am a polymath dedicated to advancing the fields of 3D printing, 3D scanning, and multimaterial fabrications, while offering cutting-edge business and automation consulting. My journey is a blend of technology, art, and sustainable living."
        },
        services: {
          title: "Services & Expertise",
          item1: {
            title: "3D Printing & Scanning",
            description:
              "Innovative additive manufacturing solutions and precision scanning technologies."
          },
          item2: {
            title: "Multimaterial Fabrications",
            description:
              "Advanced techniques for creating complex, multi-material structures."
          },
          item3: {
            title: "Business & Automation Consulting",
            description:
              "Strategic insights and cutting-edge solutions for automation and business optimization."
          },
          item4: {
            title: "Art & Creative Expression",
            description:
              "Curated creative projects including music, dance, and digital art that inspire and engage."
          }
        },
        portfolio: {
          title: "Portfolio",
          item1: {
            title: "3D Printing & Scanning",
            description:
              "Latest innovations in additive manufacturing and precision scanning."
          },
          item2: {
            title: "Multimaterial Fabrications",
            description:
              "Advanced demonstrations of fabricating complex, multi-material structures."
          },
          item3: {
            title: "Consulting Projects",
            description:
              "Case studies and success stories in business process optimization."
          },
          item4: {
            title: "Creative Expression",
            description:
              "A glimpse into my artistic endeavors – from digital art to live performances."
          }
        },
        blog: {
          title: "Insights & Blog",
          post1: {
            title: "Revolutionizing 3D Fabrication",
            excerpt:
              "Exploring the latest breakthroughs in 3D printing and scanning technology..."
          },
          post2: {
            title: "Automation in Modern Business",
            excerpt:
              "How automation is transforming industries and what you need to know..."
          },
          readMore: "Read More"
        },
        contact: {
          title: "Get In Touch",
          description:
            "Reach out to discuss collaborations, consulting opportunities, or any inquiries.",
          send: "Send Message"
        }
      }
    },
    es: {
      translation: {
        nav: {
          home: "Inicio",
          about: "Acerca de",
          services: "Servicios",
          portfolio: "Portafolio",
          blog: "Blog",
          contact: "Contacto"
        },
        home: {
          title: "Bienvenido al Futuro de la Innovación",
          subtitle:
            "Donde la fabricación 3D de vanguardia se une con el arte y la excelencia empresarial."
        },
        about: {
          title: "Sobre Mí",
          description:
            "Soy un polímata dedicado a avanzar en la impresión 3D, el escaneo y las fabricaciones multimateriales, ofreciendo consultoría experta en negocios y automatización. Mi camino fusiona tecnología, arte y vida sostenible."
        },
        services: {
          title: "Servicios y Experiencia",
          item1: {
            title: "Impresión y Escaneo 3D",
            description:
              "Soluciones innovadoras de fabricación aditiva y tecnologías de escaneo de precisión."
          },
          item2: {
            title: "Fabricaciones Multimaterial",
            description:
              "Técnicas avanzadas para crear estructuras complejas con múltiples materiales."
          },
          item3: {
            title: "Consultoría en Negocios y Automatización",
            description:
              "Perspectivas estratégicas y soluciones de vanguardia para la optimización de procesos empresariales."
          },
          item4: {
            title: "Arte y Expresión Creativa",
            description:
              "Proyectos creativos curados que incluyen música, danza y arte digital."
          }
        },
        portfolio: {
          title: "Portafolio",
          item1: {
            title: "Impresión y Escaneo 3D",
            description:
              "Últimas innovaciones en fabricación aditiva y escaneo de precisión."
          },
          item2: {
            title: "Fabricaciones Multimaterial",
            description:
              "Demostraciones de técnicas avanzadas de fabricación con diversos materiales."
          },
          item3: {
            title: "Proyectos de Consultoría",
            description:
              "Estudios de caso y éxitos en automatización y optimización de procesos empresariales."
          },
          item4: {
            title: "Expresión Creativa",
            description:
              "Un vistazo a mis emprendimientos artísticos que incluyen arte digital, música y danza."
          }
        },
        blog: {
          title: "Perspectivas y Blog",
          post1: {
            title: "Revolucionando la Fabricación 3D",
            excerpt:
              "Explorando los últimos avances en impresión y escaneo 3D..."
          },
          post2: {
            title: "Automatización en el Negocio Moderno",
            excerpt:
              "Cómo la automatización está transformando las industrias y lo que debes saber..."
          },
          readMore: "Leer Más"
        },
        contact: {
          title: "Contáctame",
          description:
            "Comunícate para discutir colaboraciones, oportunidades de consultoría o cualquier consulta.",
          send: "Enviar Mensaje"
        }
      }
    }
  };

  // Initialize i18next
  i18next.init(
    {
      lng: "en", // default language
      debug: false,
      resources: resources
    },
    function (err, t) {
      updateContent();
    }
  );

  // Function to update all elements with data-i18n attributes
  function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.getAttribute("data-i18n");
      element.innerHTML = i18next.t(key);
    });
  }

  // Language switcher event listeners
  document.getElementById("lang-en").addEventListener("click", function () {
    i18next.changeLanguage("en", updateContent);
  });
  document.getElementById("lang-es").addEventListener("click", function () {
    i18next.changeLanguage("es", updateContent);
  });
});
