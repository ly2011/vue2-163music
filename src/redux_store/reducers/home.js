import * as types from '../types';

const initialState = {
  day_weather: [],
  '24h_weather': [],
};

const homeState = (state = initialState, action) => {
  switch (action.type) {
    case types.HOME_GET_WEATHER_CITY_DAY_LIST: {
      console.log('weather: ', action.data.weather);
      return Object.assign({}, state, { day_weather: action.data.weather });
    }

    case types.HOME_GET_WEATHER_CITY_24H_LIST: {
      console.log('hourly: ', action.data.hourly);
      return Object.assign({}, state, {
        '24h_weather': action.data.hourly,
      });
    }
    default:
      return state;
  }
};

export default homeState;
