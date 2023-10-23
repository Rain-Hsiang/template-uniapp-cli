/*
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-07-04 14:37:52
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @LastEditTime: 2023-10-12 08:27:40
 * @FilePath: \template-uniapp-cli\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSSRApp } from "vue";
import App from "./App.vue";

import "uno.css";
import { setupPinia, Pinia, setupUview } from "@/plugins/index";

export function createApp() {
  const app = createSSRApp(App);

  setupPinia(app);
  setupUview(app);

  return {
    app,
    Pinia,
  };
}
