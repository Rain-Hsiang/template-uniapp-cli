<template>
  <view>
    <view>
      <view class="text-area" p="l-20px" border="0 l-4px blue solid">
        <text class="title bg-red">title</text>
      </view>
      <view class="w-50% bg-red">123</view>
      <view i-ion:fish-sharp> </view>
    </view>
    <view>
      <!-- <view>{{ store }}</view> -->
      <view>{{ name }}</view>
      <view>{{ age }}</view>
      <u-icon name="photo"></u-icon>
      <view>123</view>
    </view>

  </view>
</template>

<script setup>
import { ref } from "vue";

import { storeToRefs } from "pinia";
import { useThemeStores } from '@/stores/index'
const store = useThemeStores()
const { name, age } = storeToRefs(store)
// name.value = 'lliss'




</script>

 