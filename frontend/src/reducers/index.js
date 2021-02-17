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

const caixaProfile = (state = false, action) => {
  if (action.type === 'TOGGLECAIXA') {
    return (state = !state);
  } else {
    return state;
  }
};

const reducers = combineReducers({ saibaMaisReducer, caixaProfile });

export default reducers;
