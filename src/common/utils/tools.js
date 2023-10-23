/*
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-08-16 08:44:33
 * @LastEditors: 一条死魚 rain_play@163.com
 * @LastEditTime: 2023-08-16 12:34:48
 * @FilePath: \component-uniapp-cli\src\common\utils\tools.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * 数组去重，无法去重对象{}
 *
 * @param {Array} arr 原数组
 * @return []
 */
export function UtilRemovalRepeat(arr) {
  return Array.from(new Set(arr));
}

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
let timeout = null;
export function UtilDebounce(func, wait = 500, immediate = false) {
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === "function" && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === "function" && func();
    }, wait);
  }
}

/**
 * 节流原理：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
let timer, flag;
export function UtilThrottle(func, wait = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === "function" && func();
      timer = setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(() => {
        flag = false;
        typeof func === "function" && func();
      }, wait);
    }
  }
}

/**
 * @description 树形结构递推
 * @param arr 原数组
 * @param id 初始父级id
 * @param list []
 * @param key 父级id的key 如pid
 * @returns {array}
 */
export const UtilListToTreeFn = (arr, id, list, key) => {
  for (let item of arr) {
    if (item[key] === id) {
      list.push(item);
    }
  }
  for (let item of list) {
    item.children = [];
    treeFn(arr, item.id, item.children);
  }
  return list;
};

/**
 * @description 错误代码的解释
 * @param num 错误代码 4** 5**
 * @returns {string}
 */
export const UtilErrMsgFn = (num) => {
  let msg = "";
  switch (num) {
    case 400:
      msg = "错误的请求";
      break;
    case 401:
      msg = "用户没有权限（令牌、用户名、密码错误）";
      break;
    case 403:
      msg = "用户得到授权，但是访问是被禁止的";
      break;
    case 404:
      msg = "网络请求错误,未找到该资源";
      break;
    case 405:
      msg = "网络请求错误,请求方法未允许";
      break;
    case 408:
      msg = "网络请求超时";
      break;
    case 500:
      msg = "服务器错误,请联系管理员";
      break;
    case 501:
      msg = "网络未实现";
      break;
    case 502:
      msg = "网络错误";
      break;
    case 503:
      msg = "服务不可用，服务器暂时过载或维护";
      break;
    case 504:
      msg = "网络超时";
      break;
    case 505:
      msg = "http版本不支持该请求";
      break;
    default:
  }
  return msg;
};

/**
 * @description 格式化金钱
 * @param money 元
 * @returns {number}
 */
export const UtilFormatMoneyFn = (money) => {
  if (!Number.isNaN(money * 1)) {
    if (money < 10000) {
      return `${parseFloat(Math.round(money * 100) / 100)}元`;
      // return `${parseFloat(money)}元`;
    }
    if (money < 100000000) {
      return `${parseFloat(Math.round((money / 10000) * 100) / 100)}万`;
      // return `${parseFloat(money / 10000)}万`;
    }
    return `${parseFloat(Math.round((money / 100000000) * 100) / 100)}亿`;
    // return `${parseFloat(money / 100000000)}亿`;
  }
};

/**
 * @description 多久前，多久后
 * @param time  new Date()能识别的格式
 * @param start 基准时间
 * @returns {string}
 */
export const UtilBeforeTimeFn = (time, start) => {
  let date = new Date(time);
  let now = start ? new Date(start) : new Date();
  let dt = now - date;
  if (Number.isNaN(dt)) return;
  let s = dt / 1000;
  let str = s < 0 ? "后" : "前";
  s = Math.abs(s);
  if (s < 60) {
    return Math.round(s) + "秒" + str;
  } else if (s < 3600) {
    return parseInt(s / 60) + "分钟" + str;
  } else if (s < 86400) {
    return parseInt(s / 60 / 60) + "小时" + str;
  } else if (s < 604800) {
    //在一周内
    return parseInt(s / 60 / 60 / 24) + "天" + str;
  } else if (s < 2592000) {
    return parseInt(s / 60 / 60 / 24 / 7) + "周" + str;
  } else if (s < 2592000 && s > 604800) {
    //超过一周
    return parseInt(s / 60 / 60 / 24) + "天" + str;
  } else if (s < 31104000) {
    return parseInt(s / 60 / 60 / 24 / 30) + "月" + str;
  } else {
    return parseInt(s / 60 / 60 / 24 / 30 / 12) + "年" + str;
  }
};

/**
 * @description ******1234
 * @param value  身份证号
 * @returns {string}
 */
export const UtilDesensilizeIdCardFn = (value) => {
  if (!value || value.length != 18) return "";
  return `**************${value.slice(value.length - 4)}`;
  // // 身份证号脱敏('331082199708094687' 转换成 '33108219********87') 第8位开始替换8个
  // return value.replace(/(\d{8})\d{8}(\d*)/, "$1********$2");
};

/**
 * @description 手机号脱敏('13912345678' 转换成 '139****5678') 第3位开始替换4个
 * @param value  手机号
 * @returns {string}
 */
export const UtilDesensilizeTelFn = (value) => {
  if (!value || value.length != 11) return "";
  let start = value.slice(0, 3);
  let end = value.slice(value.length - 4);
  return `${start}****${end}`;
};

/**
 * @description 姓名脱敏(小明 转换成 *明   李小明 转换成 李*明   欧阳小明 转换成 欧**明)
 * @param value  姓名脱敏
 * @returns {string}
 */
export const UtilDesensilizeNameFn = (value) => {
  if (!value) return "";
  return `${"*".repeat(value.length - 1)}${value.slice(value.length - 1)}`;
};

/**
 * @description 银行卡脱敏
 * @param value  银行卡
 * @returns {string}
 */
export const UtilDesensilizeBankCardFn = (value) => {
  if (!value || value.length < 8) return "";
  let start = value.slice(0, 4);
  let end = value.slice(value.length - 4);
  return `${start}********${end}`;
};

/**
 * @description 格式化银行卡号，4位放一个空格
 * @param value  string类型 银行卡
 * @returns {string}
 */
export const UtilFormataccNoFn = (accNo) => {
  let result = "",
    index = 0;
  if (accNo != undefined && accNo != null) {
    for (let i = 0; i < accNo.length; i++) {
      result += accNo.charAt(i);
      index++;
      if (index == 4 && i + 1 != accNo.length) {
        result += " ";
        index = 0;
      }
    }
  }
  return result;
};
