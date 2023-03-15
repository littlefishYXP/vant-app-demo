<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-23 15:40:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-27 16:07:44
 * @FilePath: \D3SysAdming:\vant\vant-app-demo\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import utils from "../src/utils/utils";
import { login } from "../src/api/user.api";
import { useUserStore } from "../src/store/user";

const router = useRouter();
const route = useRoute();


// 路由守卫
router.beforeEach((to, from) => {
  const store = useUserStore();
  if (to.meta.requireAuth && !store.login) {
    router.push({
      path: "/login",
      query: { redirect: to.fullPath }
    });
    return false;
  }
  return true;
});


onMounted(async () => {
  //从本地读取token和userinfo判断是否已经登录
  try {
    const store = useUserStore();
    const token = utils.getData("token");
    const userinfo = utils.getData("userinfo");
    if (token && userinfo) {
      store.setToken(token);
      store.setUserInfo(JSON.parse(userinfo));
      //登录
      const res = await login(userinfo);
      if (!res || res.status != 200 || !res.data) {
        store.logout;
        router.replace({
          path: "/login",
          query: { redirect: router.currentRoute.fullPath }
        });
        return;
      }
    } else {
      store.logout;
      router.replace({
        path: "/login",
        query: { redirect: router.currentRoute.fullPath }
      });
      return;

    }
  } catch (error) {
    const store = useUserStore();
    store.logout;
    router.replace({
      path: "/login",
      query: { redirect: router.currentRoute.fullPath }
    });
  }
});





</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
