import * as types from '../types';
const initialState = {
  title: '中国天气网',
  loading: 0,
  pathname: '/',
};
const settingState = (state = initialState, action) => {
  switch (action.type) {
    case types.COM_CONF: {
      return Object.assign({}, state, {
        ...state,
        ...action.settings,
      });
    }
    case types.COM_LOADING_STATUS: {
      return Object.assign({}, state, {
        ...state,
        loading: action.loading,
      });
    }
    case types.CHANGE_PATHNAME: {
      return Object.assign({}, state, {
        ...state,
        pathname: action.data,
      });
    }
    default: {
      return state;
    }
  }
};

export default settingState;
