/*
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-08-15 19:48:21
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @LastEditTime: 2023-10-11 14:26:07
 * @FilePath: \template-uniapp-cli\src\stores\modules\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { ref } from "vue";

import { APIPostLogon, APIGetUserinfo } from "@/api/api";
export const useUserStores = defineStore(
  "user",
  () => {
    const token = ref("");
    const userinfo = ref({});

    /**
     * @description: 登录
     * @return {*}
     */
    const FnLogon = async (query) => {
      let data = await APIPostLogon(query);
      // if (data.code != 200) {
      //   uni.showToast({
      //     title: data.msg,
      //     icon: "none",
      //   });
      //   return;
      // }
      data.data && (token.value = data.data);
    };

    /**
     * @description: 退出
     * @return {*}
     */
    const FnLogout = async () => {
      const data = await uni
        .showModal({
          title: "提示",
          content: "确认退出登录吗？",
        })
        .catch((err) => {
          return err;
        });
      if (data.confirm) {
        token.value = "";
        userinfo.value = {};
        uni.showToast({
          title: "已退出登录",
          icon: "none",
        });
      }
    };

    /**
     * @description: 刷新用户信息
     * @return {*}
     */
    const FnRefreshUserinfo = async () => {
      let data = await APIGetUserinfo();
      // if (data.code != 200) {
      //   uni.showToast({
      //     title: data.msg,
      //     icon: "none",
      //   });
      //   return;
      // }
      data.data && (userinfo.value = data.data);
    };

    return {
      token,
      userinfo,
      FnLogon,
      FnLogout,
      FnRefreshUserinfo,
    };
  },
  { unistorage: true }
);
