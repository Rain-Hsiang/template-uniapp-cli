/*
 * @Author: 一条死魚 rain_play@163.com
 * @Date: 2023-08-15 19:48:21
 * @LastEditors: Rain Hsiang rain_f2e@163.com
 * @LastEditTime: 2023-10-12 10:19:48
 * @FilePath: \template-uniapp-cli\src\stores\modules\tabbar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTabbarStores = defineStore(
  "tabbar",
  () => {
    const active = ref(1);
    const list = ref([
      {
        name: 1,
        text: "首页",
        icon: "home",
        dot: false,
        badge: null,
        url: "/pages/home/index",
      },
      {
        name: 2,
        text: "我的",
        icon: "account",
        dot: false,
        badge: null,
        url: "/pages/mine/index",
      },
    ]);

    /**
     * @description: 切换tabbar
     * @return {*}
     */
    const FnChangeTabbar = async (val) => {
      if (val) {
        active.value = val;
        let url = "";
        for (let key in list.value) {
          let item = list.value[key];
          if (item.name == val) {
            url = item.url;
            break;
          }
        }
        uni.switchTab({
          url: url,
        });
      }
    };

    return {
      active,
      list,
      FnChangeTabbar,
    };
  },
  { unistorage: false }
);
