<!--
 * @Author: Rain Hsiang rain_f2e@163.com
 * @Date: 2023-10-11 10:14:44
 * @LastEditTime: 2023-10-11 10:14:51
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-uniapp-cli\src\pages\index\index copy.vue
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved. 
-->
<template>
  <view>
    <navigator url="/pages/login/index">
      <button>
        login
      </button>
    </navigator>
    <navigator url="/pages/login/index">
      <button @tap.stop="getListStationFn">
        api
      </button>
    </navigator>
    <navigator url="/pages/login/index">
      <button @tap.stop="stopRequest">
        stopRequest
      </button>
    </navigator>
  </view>
</template>

<script setup>
import request from "@/common/utils/request/request";
import { APIGetListStation } from '@/api/api'
import { ref } from "vue";
const getListStationFn = () => {
  APIGetListStation()
}
const stopRequest = () => {
  request.abortRequest()
}
</script>

 