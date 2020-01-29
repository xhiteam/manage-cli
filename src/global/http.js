/* eslint-disable */ 
/* axios请求二次封装函数 */
// 分别引入axios、router、消息提示、API根地址
import axios from 'axios';
import { Message } from 'element-ui';
import api from './api';
import router from '../router/index.js';
/**
 *配置HTTP拦截器，统一处理所有的HTTP请求和响应
 */
const http = axios.create({
  /* 超时时间 */
  timeout: 180000,
  /* api地址 */
  baseURL: api,
  /* 请求携带cookie */
  withCredentials: true
});

/**
 * http request拦截器
 */
http.interceptors.request.use(
  config => {
    console.log(config);
    /* Tip:1
     * 请求开始时结合vuex开启loading动画
     * */
    return config;
  },
  error => {
    Message.error({
      message: '请求数据错误',
      center: true,
      duration: 2000
    });
    return Promise.reject(error);
  }
);

/**
 * http response拦截器
 */
http.interceptors.response.use(
  response => {
    console.log(response);
    let data = response.data;
    if (data.code === '0000') {
      return data.data;
    }
    else if (!data.code) {
      return data;
    }
    else if (data.code === '0203') {
      Message.error({
        message: '登陆信息过期，请重新登录',
        center: true,
        duration: 2000
      });
      setTimeout(() => {
        localStorage.clear();
        router.replace({
          path: '/',
          query: { redirect: router.currentRoute.fullPath } // 登录成功后跳入浏览的当前页面
        });
      }, 1500);
      return Promise.reject(data);
    }
    else {
      Message.error({
        message: response.data.msg,
        center: true,
        duration: 2000
      });
      return Promise.reject(response);
    }
  },
  error => {
    console.log(error);
    let data = error.data;
    return Promise.reject(data);
  }
);

export default http;
