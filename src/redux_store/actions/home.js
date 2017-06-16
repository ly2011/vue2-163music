import * as types from '../types';
import api from '../api';
function getWeatherOfDay(res) {
  return {
    type: types.HOME_GET_WEATHER_CITY_DAY_LIST,
    data: res,
  };
}
function getWeatherOf24H(res) {
  return {
    type: types.HOME_GET_WEATHER_CITY_24H_LIST,
    data: res,
  };
}

/**
 * 获取每天的天气
 */
export function fetchWeatherOfDay(cb) {
  return (dispatch) => {
    api.getWeatherOfDay((res) => {
      dispatch(getWeatherOfDay(res));
      cb && cb();
    });
  };
}
/**
 * 获取每天24详细天气
 */
export function fetchWeatherOf24H(cb) {
  return (dispatch) => {
    api.getWeatherOf24H((res) => {
      dispatch(getWeatherOf24H(res));
      cb && cb();
    });
  };
}
