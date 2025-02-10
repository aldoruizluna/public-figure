document.addEventListener("DOMContentLoaded", function () {
    // Translation resources for English and Spanish
    const resources = {
      en: {
        translation: {
          nav: {
            home: "Home",
            about: "About",
            portfolio: "Portfolio",
            blog: "Blog",
            contact: "Contact",
          },
          home: {
            title: "Welcome to My World",
            subtitle:
              "A journey into additive manufacturing, automation, and creativity.",
          },
          about: {
            title: "About Me",
            description:
              "I am a pioneer in additive manufacturing and automation, committed to a sustainable solarpunk lifestyle. I nurture my body with plant-based nutrition and embrace a body-first living philosophy while expressing myself through music, dance, and creative arts.",
          },
          portfolio: {
            title: "Portfolio",
            item1: {
              title: "3D Designs & Scans",
              description: "Explore my innovative 3D models and scans.",
            },
          },
          blog: {
            title: "Latest Blog Posts",
            post1: {
              title: "Innovations in Additive Manufacturing",
              excerpt:
                "Discover the latest trends and breakthroughs in 3D printing and automation...",
            },
            readMore: "Read More",
          },
          contact: {
            title: "Contact Me",
            description:
              "Feel free to reach out for consultations, speaking engagements, or collaborations.",
            send: "Send Message",
          },
        },
      },
      es: {
        translation: {
          nav: {
            home: "Inicio",
            about: "Acerca de",
            portfolio: "Portafolio",
            blog: "Blog",
            contact: "Contacto",
          },
          home: {
            title: "Bienvenido a Mi Mundo",
            subtitle:
              "Un viaje hacia la fabricación aditiva, la automatización y la creatividad.",
          },
          about: {
            title: "Sobre Mí",
            description:
              "Soy un pionero en la fabricación aditiva y la automatización, comprometido con un estilo de vida solarpunk sostenible. Nutro mi cuerpo con una alimentación basada en plantas y adopto una filosofía de vida centrada en el cuerpo, expresándome a través de la música, la danza y las artes creativas.",
          },
          portfolio: {
            title: "Portafolio",
            item1: {
              title: "Diseños y Escaneos 3D",
              description: "Explora mis innovadores modelos y escaneos en 3D.",
            },
          },
          blog: {
            title: "Últimos Artículos",
            post1: {
              title: "Innovaciones en la Fabricación Aditiva",
              excerpt:
                "Descubre las últimas tendencias y avances en impresión 3D y automatización...",
            },
            readMore: "Leer Más",
          },
          contact: {
            title: "Contáctame",
            description:
              "No dudes en comunicarte para consultas, conferencias o colaboraciones.",
            send: "Enviar Mensaje",
          },
        },
      },
    };
  
    // Initialize i18next
    i18next.init(
      {
        lng: "en", // default language
        debug: false,
        resources: resources,
      },
      function (err, t) {
        updateContent();
      }
    );
  
    // Update the content of all elements with a data-i18n attribute
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
  