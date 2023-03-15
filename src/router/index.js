/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-26 09:49:29
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-06 23:26:19
 * @FilePath: \D3SysAdming:\vant\vant-app-demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from "vue-router";

// 登录界面
import Login from "../views/login/login.vue";


import Layout from "../views/layout/index.vue";

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    // 创建子路由
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/qa",
        name: "qa",
        component: () => import("../views/qa/index.vue"),
      },
      {
        path: "/video",
        name: "video",
        component: () => import("../views/video/index.vue"),
      },
      {
        path: "/my",
        name: "my",
        component: () => import("../views/my/index.vue"),
      },
    ],
  },
  {
    name: "用户登录界面",
    path: "/login",
    meta: { requireAuth: false },
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
