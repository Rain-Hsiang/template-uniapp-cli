<!--
 * @Author: Rain Hsiang rain_f2e@163.com
 * @Date: 2023-10-12 09:02:30
 * @LastEditTime: 2023-10-12 10:36:54
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-uniapp-cli\src\components\tabbar\index.vue
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved. 
-->
<template>
  <u-tabbar :value="active" @change="changeFn">
    <u-tabbar-item v-for="item in list" :key="item.name" :name="item.name" :text="item.text" :icon="item.icon"
      :dot="item.dot" :badge="item.badge" />
  </u-tabbar>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useTabbarStores } from '@/stores'
const store = useTabbarStores()
const { active, list } = storeToRefs(store)
const changeFn = (val) => {
  store.FnChangeTabbar(val)
}
</script>