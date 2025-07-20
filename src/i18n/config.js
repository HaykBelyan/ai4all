import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import hy from "./locales/hy.json";

i18n
	// The LanguageDetector will try to find the user's browser language.
	// If you want to ALWAYS default to Armenian regardless of the user's browser,
	// you can remove this line. But it's good practice to keep it.
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// You can set debug to false for production
		debug: true,

		// FIX: Change the fallback language to Armenian ('hy')
		fallbackLng: "hy",

		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: {
				translation: en,
			},
			hy: {
				translation: hy,
			},
		},
	});

export default i18n;
