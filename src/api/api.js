/*
 * @Author: Rain Hsiang rain_f2e@163.com
 * @Date: 2023-10-10 14:02:31
 * @LastEditTime: 2023-10-11 13:17:24
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-uniapp-cli\src\api\api.js
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved.
 */

import request from "@/common/utils/request/request";

export function APIGetListStation(data) {
  return request.get("/charge-stations/app/list", data, false);
}

// 登录
export function APIPostLogon(data) {
  return request.post("/wechat-users/wx/login", data, false);
}
// 获取用户信息
export function APIGetUserinfo(data) {
  return request.get("/wechat-users/wx/detail", data);
}
