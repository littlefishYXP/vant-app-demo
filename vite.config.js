/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-23 15:40:06
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-26 21:49:03
 * @FilePath: \D3SysAdming:\vant\vant-app-demo\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

import { fileURLToPath, URL } from 'node:url'

// import path from 'path';
// import { resolve } from "path"; // 主要用于alias文件路径别名

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  define: {
    "process.env": {
      BASE_API: "/",
    },
  },
  resolve: {
    alias: {
      // "@": resolve(__dirname, ".", "src"),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
});
