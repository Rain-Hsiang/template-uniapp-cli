<!--
 * @Author: Rain Hsiang rain_f2e@163.com
 * @Date: 2023-10-12 08:11:18
 * @LastEditTime: 2023-10-12 11:07:34
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @FilePath: \template-uniapp-cli\src\App.vue
 * @Description: 描述
 * Copyright (c) 2023 by (ΘｏΘ) Rain Hsiang <・)))><<, All Rights Reserved. 
-->
<script>
export default {
  onLaunch: function () {
    uni.hideTabBar();
  },
  onShow: function () {
    uni.hideTabBar();
  },
  onHide: function () {
  },
}
</script>

<style lang="scss">
@import "uview-plus/index.scss";

.safe-pb {
  padding-bottom: constant(safe-area-inset-bottom); //兼容 IOS<11.2
  padding-bottom: env(safe-area-inset-bottom); //兼容 IOS>11.2
}

.safe-pt {
  padding-top: var(--status-bar-height);
}

.safe-page {
  min-height: 100vh;
  box-sizing: border-box;
}
</style>
