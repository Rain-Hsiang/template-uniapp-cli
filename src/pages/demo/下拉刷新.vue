<template>
  <view>
    <mescroll-body @init="mescrollInit" @down="downCallback" @up="upCallback">
      <view style="background-color: pink;height: 899px;"></view>
    </mescroll-body>
  </view>
</template>

<script setup>
// 文档vue3版本 https://www.mescroll.com/uni.html?v=1.3.8
import { ref } from "vue";
import { onPageScroll, onReachBottom } from "@dcloudio/uni-app";
import mescrollBody from "@/components/mescroll/mescroll-body/mescroll-body.vue";
import useMescroll from "@/components/mescroll/hooks/useMescroll.js";
const { mescrollInit, downCallback } = useMescroll(onPageScroll, onReachBottom); // 调用mescroll的hook

const upCallback = async (mescroll) => {
  // let num = mescroll.num
  // let size = mescroll.size
  // let data = await APIGetListOrder({ pageNum: num, pageSize: size })
  // if (data.code != 200) return uni.$showMsg()
  // let total = data.data.total
  // let list = data.data.list
  // if (page.num == 1) this.orderList = [];
  // this.orderList = this.orderList.concat(list); //追加新数据
  // mescroll.endByPage(list.length, total);

  mescroll.endErr();
};

</script>

 