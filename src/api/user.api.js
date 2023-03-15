/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-26 23:40:16
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-15 09:56:56
 * @FilePath: \D3SysAdming:\vant\vant-app-demo\src\api\user.api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import api from "./api";
// 用户登录
export const login = (data) => {
  return api({
    method: "POST",
    url: "/api/users/login",
    data,
  });
};

//获取用户完整信息
export const getUserInfo = (username) => {
  return api({
    method: "POST",
    url: "/api/userinfo/getuserinfo",
    params: { username },
    data,
  });
};

