import { combineReducers } from 'redux';

const saibaMaisReducer = (state = false, action) => {
  if (action.type === 'ABRIRSAIBAMAIS') {
    return (state = action.value);
  } else if (action.type === 'FECHARSAIBAMAIS') {
    return (state = false);
  } else {
    return state;
  }
};

const reducers = combineReducers({ saibaMaisReducer });

export default reducers;
