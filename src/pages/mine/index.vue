<!--
 * @Author: Rain Hsiang rain_f2e@163.com
 * @Date: 2023-10-12 08:11:18
 * @LastEditTime: 2023-10-12 11:15:54
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-uniapp-cli\src\pages\mine\index.vue
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved. 
-->
<template>
  <view class="safe-page">
    <u-navbar title="我的" leftIcon="" :placeholder="true" />
    <view class="bg-green-6">
      <navigator url="/pages/login/index">
        <button>
          去登陆
        </button>
      </navigator>
      <view v-for="i in 20" class="border-md p-20px">home</view>
    </view>
    <Tabbar />
  </view>
</template>

<script setup>
import Tabbar from '@/components/Tabbar'
</script>

 