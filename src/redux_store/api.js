/**
 * api配置, 开发环境下使用webpack的proxy请求数据
 */

import 'isomorphic-fetch';
// import axios from 'axios';
// import fetchJsonp from 'fetch-jsonp';
// axios.defaults.baseURL = 'http://api.exmple.com';
// const AUTH_TOKEN = 'http://google.com';
// axios.defaults.headers.common.Authorization = AUTH_TOKEN;
// axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';

const api_url = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:3000'
  : 'http://localhost:3000';

const checkStatus = (response) => {
  if (
    (response.status >= 200 && response.status < 300) || response.status === 0
  ) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

export default {
  // 获取天气预报
  getWeatherOfDay(cb) {
    const params = new URLSearchParams();
    params.append('city', 'CHSH000000');
    params.append('language', 'zh-chs');
    params.append('unit', 'c');
    params.append('aqi', 'city');
    params.append('alarm', 1);
    params.append('key', '78928e706123c1a8f1766f062bc8676b');
    fetch(`${api_url}/all?${params}`, {
      mode: 'cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((res) => {
        cb && cb(res);
      })
      .catch(err => err);
  },
  /**
   * 获取每天的24h详细天气
   */
  getWeatherOf24H(cb) {
    const params = new URLSearchParams();
    params.append('city', 'CHSH000000');
    params.append('language', 'zh-chs');
    params.append('key', '78928e706123c1a8f1766f062bc8676b');

    fetch(`${api_url}/future24h?${params}`, {
      mode: 'cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((res) => {
        cb && cb(res);
      })
      .catch(err => err);
  },
};
