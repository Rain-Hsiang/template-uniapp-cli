/*
 * @Author: Rain Hsiang rain_f2e@163.com
 * @Date: 2023-10-12 08:25:00
 * @LastEditTime: 2023-10-12 08:34:19
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-uniapp-cli\src\plugins\modules\uview.js
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved.
 */

// 1. main.js - 导入
// 2. uni.css - @import 'uview-plus/theme.scss';
// 3. App.vue - @import "uview-plus/index.scss"; (lang="scss")
// 4. pages.json - 配置easycom
import uviewPlus from "uview-plus";

export function setupUview(app) {
  app.use(uviewPlus);
}
