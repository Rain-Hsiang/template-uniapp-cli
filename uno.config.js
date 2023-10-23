/*
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-08-15 20:31:58
 * @LastEditors: 一条死魚 rain_play@163.com
 * @LastEditTime: 2023-08-16 12:37:59
 * @FilePath: \component-uniapp-cli\uno.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "unocss";

// https://github.com/MellowCo/unocss-preset-weapp
// 小程序预设不需要下载 "@unocss/preset-wind和presetAttributify"不能和unocss-preset-weapp同时使用
// pnpm i -D unocss-preset-weapp  && pnpm rm @unocss/preset-wind @unocss/preset-attributify
import presetWeapp from "unocss-preset-weapp";
import {
  extractorAttributify,
  transformerClass,
} from "unocss-preset-weapp/transformer";
const { presetWeappAttributify, transformerAttributify } =
  extractorAttributify();

import presetIcons from "@unocss/preset-icons";
// import presetWind from "@unocss/preset-wind";
// import presetAttributify from "@unocss/preset-attributify";

export default defineConfig({
  presets: [
    // 这两个是小程序的预设
    presetWeapp(),
    presetWeappAttributify(),
    // 这两个app的预设
    // presetWind(),
    // presetAttributify(),
    // 字体图标预设
    presetIcons({
      scale: 1.2,
    }),
  ],

  // shortcuts: [
  //   {
  //     "border-base": "border border-gray-500_10",
  //   },
  // ],

  // 小程序的
  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
});
