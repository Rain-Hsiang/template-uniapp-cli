/*
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-08-15 19:24:25
 * @LastEditors: 一条死魚 rain_play@163.com
 * @LastEditTime: 2023-08-15 20:19:02
 * @FilePath: \component-uniapp-cli\src\plugins\modules\pinia.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as PiniaAlias from 'pinia'
import { createUnistorage } from "pinia-plugin-unistorage";

export const Pinia = PiniaAlias
export function setupPinia(app) {
  app.use(PiniaAlias.createPinia().use(createUnistorage()));
  // app.use(PiniaAlias.createPinia());
}