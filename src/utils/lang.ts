import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "headingAbt": "About Me",
          "headingTech": "Tech Stack",
          "headingContact": "Contact",
          "greeting": "Welcome!",
          "introOne":"I'm Liban, a passionate Microsoft 365 & Frontend Developer based in Stockholm with a knack for transforming innovative ideas into reality, with expertise in SharePoint and the Power Platform." ,
          "introTwo": "I specialize in creating seamless digital experiences that enhance productivity and collaboration.",
          "introThree": "Driven by a love for technology and continuous learning, I aim to empower organizations to harness the full potential of Microsoft 365 solutions.",
          "dwnBtn": "Download CV",
          "stack": "Tech Stack",
          "365Btn": "M365",
          "frontendBtn": "Frontend",
          "contact": "Contact Me",
          "name": "Name",
          "nameInput": "Your Name",
          "email": "Email adress",
          "emailInput": "Email adress",
          "message": "Message",
          "messageInput": "Your Message",
          "msgBtn": "Send Message",
          "exp": "Experience",
          "edu": "Education"
        }
      },
      sv: {
        translation: {
            "headingAbt": "Om Mig",
            "headingTech": "Tech Stack",
            "headingContact": "Kontakt",
            "greeting": "Välkommen!",
            "introOne": "Mitt namn är Liban och jag är en passionerad Microsoft 365 & Frontend-utvecklare baserad i Stockholm med en förmåga att omvandla innovativa idéer till verklighet, med expertis inom SharePoint och Power Platform.",
            "introTwo": "Jag specialiserar mig på att skapa sömlösa digitala upplevelser som förbättrar produktivitet och samarbete.",
            "introThree": "Driven av en passion för teknik och ständig utveckling strävar jag efter att ge organisationer möjligheten att utnyttja Microsoft 365-lösningarnas fulla potential.",
            "dwnBtn": "Hämta CV",
            "stack": "Tech Stack",
            "365Btn": "M365",
            "frontendBtn": "Frontend",
            "contact": "Kontakta Mig",
            "name": "Namn",
            "nameInput": "Ditt Namn",
            "email": "Email adress",
            "emailInput": "Email adress",
            "message": "Meddelande",
            "messageInput": "Ditt Meddelande",
            "msgBtn": "Skicka Meddelande",
            "exp": "Erfarenhet",
            "edu": "Utbildning"

        }
      }
    },
    lng: "sv", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

  export default i18n