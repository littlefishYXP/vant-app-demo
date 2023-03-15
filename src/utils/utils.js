/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-25 21:22:42
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-06 17:38:28
 * @FilePath: \D3SysAdming:\vant\vant-app-demo\src\utils\utils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  showToast,
  showLoadingToast,
  closeToast,
  showSuccessToast,
  showFailToast,
  showConfirmDialog,
  showDialog,
} from "vant";

Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "D+": this.getDate(), //日
    "H+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

const utils = {
  saveData(key, value) {
    //记录数据
    localStorage.setItem(key, value);
  },
  removeData(key) {
    //移除数据
    localStorage.removeItem(key);
  },
  getData(key) {
    //获取数据
    return localStorage.getItem(key);
  },
  showLoading(msg) {
    //加载提示
    showLoadingToast({
      message: msg,
      forbidClick: true,
      duration: 0, //设置成0,不会自动关闭
    });
  },

  hideLoading() {
    closeToast();
  },

  showMsg(msg) {
    //显示消息提示
    showToast(msg);
  },
  showSuccess(msg) {
    //显示成功消息提示
    showSuccessToast(msg);
  },
  showFail(msg) {
    //显示失败提示
    showFailToast(msg);
  },

  showConfirmDlg(title, msg, callback) {
    //显示确认和取消按钮
    showConfirmDialog({
      title: title,
      message: msg,
    })
      .then(() => {
        callback && callback("ok");
      })
      .catch(() => {
        callback && callback("cancel");
      });
  },

  showDlg(title, msg, callback) {
    //显示确认按钮
    showDialog({
      title: title,
      msg: msg,
    }).then(() => {
      callback && callback();
    });
  },

  checkPhone(phone) {
    let phonereg = /^1[3-9][0-9]{9}$/;
    return phonereg.test(phone);
  },
};

export default utils;
