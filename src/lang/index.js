import { createI18n } from "vue-i18n";
import Cookies from "js-cookie";
import elementEnLocale from "element-plus/dist/locale/en.mjs"; // element-ui lang
import elementZhLocale from "element-plus/dist/locale/zh-cn.mjs"; // element-ui lang

import enLocale from "./en";
import zhLocale from "./zh";

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
  },
};
export function getLanguage() {
  const chooseLanguage = Cookies.get("language");
  if (chooseLanguage) return chooseLanguage;

  // if has not choose language
  const language = (
    navigator.language || navigator.browserLanguage
  ).toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return "en";
}
export const i18n = createI18n({
  locale: getLanguage(),
  fallbackLocale: "zh-cn",
  globalInjection: true,
  legacy: false,
  messages,
});

export default { getLanguage, i18n };
