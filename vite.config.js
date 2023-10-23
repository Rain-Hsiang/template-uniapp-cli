/*
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-07-04 14:37:52
 * @LastEditors: 一条死魚 rain_play@163.com
 * @LastEditTime: 2023-08-15 20:33:43
 * @FilePath: \component-uniapp-cli\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

import { BASE_URL } from "./src/common/config/base";
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Unocss(),
  ],
  server: {
    port: 8000,
    proxy: {
      "/api": {
        target: BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
})
