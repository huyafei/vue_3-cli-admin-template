import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Cookies from "js-cookie";
import "normalize.css/normalize.css"; // a modern alternative to CSS resets
import ElementPlus from "element-plus";
import "./assets/styles/element/index.scss";

import "@/assets/styles/index.scss"; // global css

import { i18n, getLanguage } from "./lang"; // internationalization
import "./icons"; // icon
import "./permission"; // permission control

/**
 * 如果您不想使用模拟服务器
 * 你想用MockJs来模拟api可以执行:mockXHR()
 * 请在上线前删除!!!
 */
const { mockXHR } = require("../mock");
console.log(process.env.VUE_APP_PROJECT_ENV);
if (["development"].includes(process.env.VUE_APP_PROJECT_ENV)) {
  mockXHR();
}

const app = createApp(App);
import SvgIcon from "@/components/base/SvgIcon";
app.component(SvgIcon.name, SvgIcon);

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus, {
  size: Cookies.get("size") || "default", // set element-ui default size
  // locale: getLanguage(),
  // i18n: i18n.global.t,
});
app.use(store).use(router).use(i18n).mount("#app");
