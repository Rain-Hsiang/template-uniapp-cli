/*
 * @Author: Rain Hsiang rain_f2e@163.com
 * @Date: 2023-10-10 14:02:31
 * @LastEditTime: 2023-10-12 09:58:28
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-uniapp-cli\src\common\utils\request\request.js
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved.
 */

// 参考 https://zhuanlan.zhihu.com/p/647257948 https://www.jianshu.com/p/dd14bd83cffe

import { BASE_URL } from "@/common/config/base";
import { useUserStores } from "@/stores";

const arr_request = {};

// 全局请求封装
const baseRequest = (path, data, needToken, method) => {
  const store = useUserStores();
  let token = store.token;
  let Authorization = ``;
  return new Promise((resolve, reject) => {
    if (needToken) {
      if (token == "") {
        uni.showToast({
          icon: "none",
          title: `请登录`,
        });
        setTimeout(() => {
          uni.navigateTo({
            url: "/pages/login/index",
          });
        }, 500);
        reject({ code: 401, msg: "请登录" });
        return false;
      }
      Authorization = `${token}`;
    }
    let url;
    // #ifdef H5
    url = path;
    // #endif
    // #ifndef H5
    url = BASE_URL + path;
    // #endif
    const key = `${new Date().getTime()}${(Math.random() + "").split(".")[1]}`;
    arr_request[key] = uni.request({
      header: {
        Authorization,
      },
      url: url,
      method: method,
      data,
      success(response) {
        if (response.statusCode == 200) {
          if (response.data.code == 401) {
            uni.showToast({
              icon: "none",
              title: `凭证过期，请重新登录`,
            });
            // setTimeout(() => {
            //   uni.navigateTo({
            //     url: "/pages/login/index",
            //   });
            // }, 500);
            reject(response.data);
          } else if (response.data.code != 200) {
            uni.showToast({
              icon: "none",
              title: `${response.data.msg}`,
            });
            reject(response.data);
          } else {
            resolve(response.data);
          }
        } else {
          uni.showToast({
            icon: "none",
            title: `${response.statusCode}`,
          });
          reject({ code: response.statusCode, msg: response.statusCode });
        }
      },
      fail(err) {
        console.log(`request.js: ${err}`);
        reject(err);
      },
      complete() {
        delete arr_request[key];
      },
    });
  });
};

/**
 * @description 网络请求
 * @param {string} url 网址 '/api/login'
 * @param {object} data 数据 {}
 * @param {boolean} needToken 是否需要token，默认true
 * @returns {object} {}
 */
const request = {};
["get", "post", "put", "delete"].forEach((method) => {
  request[method] = (url, data = {}, needToken = true) =>
    baseRequest(url, data, needToken, method);
});

/**
 * @description: 终止所有网络.
 * @returns {*}
 */
request.abortRequest = () => {
  for (let key in arr_request) {
    arr_request[key].abort();
  }
};

export default request;
