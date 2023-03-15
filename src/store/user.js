/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-25 22:20:39
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-08 00:24:14
 * @FilePath: \D3SysAdming:\vant\vant-app-demo\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import utils from "../utils/utils";
import { ref, reactive,toRefs } from "vue";

//组合式store
export const useUserStore = defineStore("userStore", () => {
  let userinfo = {}; //当前登录的用户信息
  let token = null; //当前登录标识token
  let islogin = false; //检测当前是否已经登录
  let dicts = {}; //数据字典选项

  //注意加上this
  function setDict(key, dicts) {
    this.dicts[key] = dicts;
  }

  function setUserInfo(loginUserinfo) {
    this.userinfo = {...userinfo, ...loginUserinfo};
    utils.saveData("userinfo", JSON.stringify(this.userinfo));
  }
  
  function setToken(userToken) {
    this.token= userToken;
    this.islogin= true;
    utils.saveData("token", this.token);
  }

  function logout() {
    this.token= null;
    this.islogin = false;
    this.userinfo = null;
    utils.removeData("userinfo");
    utils.removeData("token");
  }

  return {
    userinfo,
    token,
    islogin,
    dicts,
    setDict,
    setUserInfo,
    setToken,
    logout,
  };
});

export default useUserStore;
