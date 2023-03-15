<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-06 22:32:57
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-08 00:13:33
 * @FilePath: \D3SysAdming:\vant\vant-app-demo\src\views\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>

import { ref } from 'vue';
import {computed} from "vue";
import { useUserStore } from "@/store/user";
const active = ref(0);
const store = useUserStore();
const userState=computed(()=> store.islogin);  //计算属性检查是否登录




</script>

<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="qa">问答</van-tabbar-item>
            <van-tabbar-item icon="video-o" to="video">视频</van-tabbar-item>
            <van-tabbar-item icon="contact" to="my">{{userState?"我的":"未登录"}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style scoped></style>