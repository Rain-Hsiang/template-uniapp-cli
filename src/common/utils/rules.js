/*
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-08-16 08:44:33
 * @LastEditors: 一条死魚 rain_play@163.com
 * @LastEditTime: 2023-08-16 09:39:20
 * @FilePath: \component-uniapp-cli\src\common\utils\tools.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * @description 判断是否为数字
 * @param value
 * @returns {boolean}
 */
export const UtilIsNumber = (value) => {
  const reg = /^[0-9]*$/;
  return reg.test(value);
};

/**
 * @description 判断是否是小写字母
 * @param str
 * @returns {boolean}
 */
export const UtilIsLowerCase = (str) => {
  const reg = /^[a-z]+$/;
  return reg.test(str);
};

/**
 * @description 判断是否是大写字母
 * @param str
 * @returns {boolean}
 */
export const UtilIsUpperCase = (str) => {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
};

/**
 * @description 判断是否为数字且最多两位小数
 * @param str
 * @returns {boolean}
 */
export const UtilIsNum = (str) => {
  const reg = /^\d+(\.\d{1,2})?$/;
  return reg.test(str);
};

/**
 * @description 判断是否是字符串
 * @param str
 * @returns {boolean}
 */
export const UtilIsString = (str) => {
  return typeof str === "string" || str instanceof String;
};

/**
 * @description 判断是否是数组
 * @param arg
 * @returns {arg is any[]|boolean}
 */
export const UtilIsArray = (arg) => {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
};

/**
 * @description 判断是否是手机号
 * @param str
 * @returns {boolean}
 */
export const UtilIsPhone = (str) => {
  const reg = /^1\d{10}$/;
  return reg.test(str);
};

/**
 * @description 判断是否是身份证号(第二代)
 * @param str
 * @returns {boolean}
 */
export const UtilIsIdCard = (str) => {
  const reg =
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(str);
};

/**
 * @description 判断是否是邮箱
 * @param str
 * @returns {boolean}
 */
export const UtilIsEmail = (str) => {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return reg.test(str);
};

/**
 * @description 判断是否全中文
 * @param str
 * @returns {boolean}
 */
export const UtilIsChina = (str) => {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/;
  return reg.test(str);
};

/**
 * @description 判断是否为空
 * @param str
 * @returns {boolean}
 */
export const UtilIsNull = (str) => {
  return (
    str == null ||
    false ||
    str === "" ||
    str.trim() === "" ||
    str == undefined ||
    str.toLocaleLowerCase().trim() === "null"
  );
};

/**
 * @description 判断是否为固话
 * @param str
 * @returns {boolean}
 */
export const UtilIsTel = (str) => {
  const reg =
    /^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})(-| )?)?([0-9]{7,8})((-| |转)*([0-9]{1,4}))?$/;
  return reg.test(str);
};
