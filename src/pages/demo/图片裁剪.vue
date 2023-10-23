<template>
  <view>
    <!-- <view>
      <view class="text-area" p="l-20px" border="0 l-4px blue solid">
        <text class="title bg-red">title</text>
      </view>
      <view class="w-50% bg-red">123</view>
      <view i-ion:fish-sharp> </view>
    </view> -->
    <!-- <view>
      <view>{{ store }}</view>
      <view>{{ name }}</view>
      <view>{{ age }}</view>
      <u-icon name="photo"></u-icon>
      <view>123</view>
    </view> -->
    <button type="submit" @click="chooseImg">选择图片</button>
    <image :src="src" mode="scaleToFill" />
    <qf-image-cropper v-if="show" :src="src" :width="500" :height="500" :radius="30"
      @crop="handleCrop"></qf-image-cropper>
  </view>
</template>

<script setup>
import { ref } from "vue";

import { storeToRefs } from "pinia";
import { useThemeStores } from '@/stores/index'
const store = useThemeStores()
const { name, age } = storeToRefs(store)
// name.value = 'lliss'

import QfImageCropper from "@/components/qf-image-cropper/qf-image-cropper.vue";
const show = ref(false)
const src = ref("");
const chooseImg = () => {
  uni.chooseImage({
    count: 1,
    sizeType: ["original", "compressed"],
    sourceType: ["album"],
    success: function (res) {
      console.log(res)
      src.value = res.tempFilePaths[0]
      show.value = true
    },
  });
};
const handleCrop = (e) => {
  console.log(e);
  src.value = e.tempFilePath;
  show.value = false
};


</script>

 