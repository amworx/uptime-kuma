import { createI18n } from "vue-i18n/dist/vue-i18n.esm-browser.prod.js";
import en from "./languages/en";

const languageList = {
    "ar-SY": "العربية",
    "cs-CZ": "Čeština",
    "zh-HK": "繁體中文 (香港)",
    "bg-BG": "Български",
    "de-DE": "Deutsch (Deutschland)",
    "de-CH": "Deutsch (Schweiz)",
    "nl-NL": "Nederlands",
    "nb-NO": "Norsk",
    "es-ES": "Español",
    "eu": "Euskara",
    "fa": "Farsi",
    "pt-PT": "Português (Portugal)",
    "pt-BR": "Português (Brasileiro)",
    "fr-FR": "Français (France)",
    "hu": "Magyar",
    "hr-HR": "Hrvatski",
    "it-IT": "Italiano (Italian)",
    "id-ID": "Bahasa Indonesia (Indonesian)",
    "ja": "日本語",
    "da-DK": "Danish (Danmark)",
    "sr": "Српски",
    "sl-SI": "Slovenščina",
    "sr-latn": "Srpski",
    "sv-SE": "Svenska",
    "tr-TR": "Türkçe",
    "ko-KR": "한국어",
    "ru-RU": "Русский",
    "zh-CN": "简体中文",
    "pl": "Polski",
    "et-EE": "eesti",
    "vi-VN": "Tiếng Việt",
    "zh-TW": "繁體中文 (台灣)",
    "uk-UA": "Український",
    "th-TH": "ไทย",
    "el-GR": "Ελληνικά",
};

let messages = {
    en,
};

for (let lang in languageList) {
    messages[lang] = {
        languageName: languageList[lang]
    };
}

const rtlLangs = [ "fa", "ar-SY" ];

export const currentLocale = () => localStorage.locale
    || languageList[navigator.language] && navigator.language
    || languageList[navigator.language.substring(0, 2)] && navigator.language.substring(0, 2)
    || "en";

export const localeDirection = () => {
    return rtlLangs.includes(currentLocale()) ? "rtl" : "ltr";
};

export const i18n = createI18n({
    locale: currentLocale(),
    fallbackLocale: "en",
    silentFallbackWarn: true,
    silentTranslationWarn: true,
    messages: messages,
});
