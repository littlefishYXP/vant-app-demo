/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-25 23:24:40
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-06 21:47:27
 * @FilePath: \D3SysAdming:\vant\vant-app-demo\src\api\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";
import {useUserStore} from "../store/user";
import router from "../router/index";


const api = axios.create({
  timeout: 30 * 1000,
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
});

//请求拦截器(把token加到每次请求中)
api.interceptors.request.use(function (config) {
  const store = useUserStore();
  let token = store.token;
  if (token) {
    config.headers.token = token;
  }
  return config;
});

//响应拦截器
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          const store = useUserStore();
          store.logout(); //退出登录
          router.replace({
            path: "/login",
            query: {
              redirect: router.currentRoute.fullPath,
            },
          });
      }
    }
    return Promise.reject(error);
  }
);

export default api;
