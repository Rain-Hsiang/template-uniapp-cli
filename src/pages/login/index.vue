<template>
  <view class="safe-page safe-pt safe-pb bg-#f6f6f6" p="x-40rpx">
    <view class="bg-#ffffff box-border rounded-40rpx shadow-md" p="y-100rpx x-44rpx" m="t-16vh">
      <image class="w-224rpx h-224rpx rounded-md block" m="x-auto b-40rpx" src="@/static/logo.png" mode="aspectFill" />
      <view class="font-bold" text="34rpx" m="b-60rpx">授权 咕点微超 获取以下信息为您服务</view>
      <view text="26rpx" m="b-20rpx l-16rpx">获取您的公开信息（昵称、头像、性别等）</view>
      <view text="26rpx" m="b-56rpx l-16rpx">获取您的电话号码</view>
      <view text="#8A8A8A 26rpx" m="b-80rpx">
        <radio class="" />
        <text>阅读并同意</text>
        <text text="#D89135">《隐私协议》</text>
      </view>
      <view class="h-92rpx leading-92rpx box-border bg-#949494 rounded-md" text="center #ffffff 36rpx" p="x-28rpx ">
        登录
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";


</script>

 