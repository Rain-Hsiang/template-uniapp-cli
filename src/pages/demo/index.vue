<!--
 * @Author: Rain Hsiang rain_f2e@163.com
 * @Date: 2023-10-12 08:11:18
 * @LastEditTime: 2023-10-12 08:40:50
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-uniapp-cli\src\pages\index\index.vue
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved. 
-->
<template>
  <view>
    <up-button type="primary" text="确定"></up-button>
    <button @tap.stop="fn">test</button>
    <view>test</view>
    <view>{{ store_token }}</view>
  </view>
</template>

<script setup>
import { APIPostLogon, APIGetUserinfo } from "@/api/api";
// import request from "@/common/utils/request/request";
import { storeToRefs } from "pinia";
// import { useTestStores } from '@/stores/modules/test'
import { useUserStores } from '@/stores'
const store = useUserStores()
const {
  store_token,
  store_userinfo,
  //   ActionLogout,
  //   ActionRefreshUserinfo,
} = storeToRefs(store)
const fn = async () => {
  store.FnLogout()
  // const data = await uni
  //   .showModal({
  //     title: "提示",
  //     content: "确认退出登录吗？",
  //   })
  //   .catch((err) => {
  //     return err;
  //   });
  // console.log(data);
  // if (succ && succ.confirm) {
  //   store_token.value = "";
  //   store_userinfo.value = {};
  //   uni.showToast({
  //     title: "已退出登录",
  //     icon: "none",
  //   });
  // }
}
// console.log(store_token.value);
// console.log(store_userinfo.value);
</script>

 