<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-26 09:11:58
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-07 22:36:30
 * @FilePath: \D3SysAdming:\vant\vant-app-demo\src\views\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<script setup>

import { ref, toRefs } from "vue";
import utils from "@/utils/utils.js";
import { login } from '@/api/user.api'
import { useUserStore } from "@/store/user";
import { useRouter, useRoute } from "vue-router";


const router = useRouter();
const route = useRoute();
const store = useUserStore(); //要放到这里


const username = ref('');
const password = ref('');

const onSubmit = async () => {
    try {
        //调用登录接口进行登录    
        utils.showLoading('登录中...');
        let userinfo = { username: username.value, password: password.value }
        const res = await login(userinfo);
        if (!res || res.status != 200 || !res.data) {
            utils.hideLoading();
            if (res.data && res.data.message) {
                utils.showFail(res.data.message);
            } else {
                utils.showFail("登录失败!");
            }
            return;
        }
        utils.hideLoading();
        let token = res.data.data.token;
        store.setToken(token);
        store.setUserInfo({ username: username.value });
        //转到主页
        router.push({ path: "/my" });
    } catch (error) {
        // console.log(error.message);
        utils.hideLoading();
        utils.showFail("登录失败!");
    }
};


</script>

<template>
    <div>
        <van-nav-bar title="登录" class="page-nav-bar">
            <template #left>
                <van-icon name="cross" size="18" @click="this.$router.back()" />
            </template>
        </van-nav-bar>
        <van-form @submit="onSubmit">
            <van-field name="username" placeholder="请输入用户名" left-icon="manager" v-model="username"
                autocomplete="username" />
            <van-field type="password" name="password" placeholder="请输入密码" left-icon="lock" v-model="password"
                autocomplete="current-password" />
            <div style="margin: 16px;">
                <van-button block type="primary" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>


<style scoped></style>











