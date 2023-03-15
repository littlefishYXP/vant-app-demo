<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-06 22:50:47
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-08 00:17:13
 * @FilePath: \D3SysAdming:\vant\vant-app-demo\src\views\my\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { computed,watch } from "vue";
import { useUserStore } from "@/store/user";
import utils from "@/utils/utils.js";

const store = useUserStore();
const userState = computed(() => store.islogin);  //计算属性检查是否登录,计算属性本身就是响应式对象
const onLogout = () => {
    utils.showConfirmDlg('提示', "确定要退出系统登录吗?", (result) => {
        if (result === 'ok') {
            // 点击确认按钮的回调
            store.logout();
            console.log(store.islogin);

        } else {
            // 点击取消按钮的回调
            return;
        }
    })
}
</script>


<template>
    <div class="my-container">
        <!-- 未登录 -->
        <div v-if="!userState" class="header not-login">
            <div class="login-btn" @click="this.$router.push('login')">
                <img class="mobile-img" src="../../assets/mobile.png" alt="" />
                <span class="text">注册/登录</span>
            </div>
        </div>


        <!-- 已登录 -->
        <div v-else class="header user-info">
            <div class="base-info">
                <div class="left">
                    <van-image round fit="cover" class="avatar"
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    <span class="name">{{store.userinfo.username}}</span>
                </div>
                <div class="right">
                    <van-button size="mini" round>编辑资料</van-button>
                </div>
            </div>
            <div class="data-stats">
                <div class="data-item">
                    <span class="count">0</span>
                    <span class="text">头条</span>
                </div>
                <div class="data-item">
                    <span class="count">0</span>
                    <span class="text">关注</span>
                </div>

                <div class="data-item">
                    <span class="count">0</span>
                    <span class="text">粉丝</span>
                </div>

                <div class="data-item">
                    <span class="count">0</span>
                    <span class="text">获赞</span>
                </div>
            </div>
        </div>
        <!-- 导航 -->
        <van-grid :column-num="2" clickable>
            <van-grid-item icon="star-o" text="收藏" />
            <van-grid-item icon="clock-o" text="历史" />
        </van-grid>
        <!-- 消息通知与退出登录 -->
        <van-cell title="消息通知" is-link />
        <van-cell title="小平同学" is-link />
        <!-- 注意 退出登录要登录成功才显示出来 -->
        <van-cell title="退出登录" class="logout-cell" v-if="userState" @click="onLogout" />



    </div>
</template>

<style>
.my-container .header {
    height: 361px;
    background: url("../../assets/banner.png");
    background-size: cover;

}

.my-container .not-login {
    /* 没有登录的效果样式*/
    display: flex;
    justify-content: center;
    align-items: center;
}

.my-container .not-login .login-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.mobile-img {
    width: 132px;
    height: 132px;
    margin-bottom: 15px;
}

.text {
    font-size: 18px;
    color: #fff;
}

.user-info .base-info {
    height: 131px;
    padding: 70px 32px 23px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.user-info .left {
    display: flex;
    align-items: center;
}

.user-info .left .avatar {
    width: 132px;
    height: 132px;
    margin-right: 13px;
    border: 1px solid #fff;
}

.user-info .left .name {
    font-size: 16px;
    color: #fff;
}

.user-info .data-stats {
    /* background-color: #ccc; */
    display: flex;
    /* height: 130px; */
}

.user-info .data-stats .data-item {
    height: 130px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.user-info .data-stats .count {
    font-size: 18px;
}

.user-info .data-stats .text {
    font-size: 18px;
}

.van-grid-item__icon {
    color: #eb5253;
}


.logout-cell {
    text-align: center;
    color: #d86262;
    height: 120px;
    margin-top: 9px;
}
</style>