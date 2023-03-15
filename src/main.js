/*
F * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-23 15:40:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-07 14:32:31
 * @FilePath: \D3SysAdming:\vant\vant-app-demo\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import App from "./App.vue";
import "amfe-flexible";

//引入路由
import router from "./router";
//引入数据状态管理
import { createPinia } from "pinia";

import "vant/lib/index.css";
//使用轻提示要引入样式
import "vant/es/toast/style";
//使用消息提示要引入样式
import "vant/es/notify/style";
// 默认主题
import "./style/default.css";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
