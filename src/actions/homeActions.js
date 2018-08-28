import axios from 'axios';
import {
  SET_DESTINO_VALUE,
  SET_ORIGEM_VALUE,
  SET_MIN_VALUE,
  SET_TIME,
  SET_PLAN,
  SET_WITH_PLAN,
  SET_WITHOUT_PLAN,
  ADD_TABLE,
  CLEAR,
  CLEAR_TABLE,
  SET_TABLE,
} from './actionTypes';

export const setDestinyValue = payload => ({
  type: SET_DESTINO_VALUE,
  payload,
});

export const setoriginValue = payload => ({
  type: SET_ORIGEM_VALUE,
  payload,
});

export const setMinValue = () => (dispatch, getState) => {
  const state = getState();
  let minValue = '-';
  if (
    state.homeReducer.originValue === '011'
    && state.homeReducer.destinyValue === '016'
  ) {
    minValue = 1.9;
  } else if (
    state.homeReducer.originValue === '016'
    && state.homeReducer.destinyValue === '011'
  ) {
    minValue = 2.9;
  } else if (
    state.homeReducer.originValue === '011'
    && state.homeReducer.destinyValue === '017'
  ) {
    minValue = 1.7;
  } else if (
    state.homeReducer.originValue === '017'
    && state.homeReducer.destinyValue === '011'
  ) {
    minValue = 2.17;
  } else if (
    state.homeReducer.originValue === '011'
    && state.homeReducer.destinyValue === '018'
  ) {
    minValue = 0.9;
  } else if (
    state.homeReducer.originValue === '018'
    && state.homeReducer.destinyValue === '011'
  ) {
    minValue = 1.9;
  }
  return dispatch({
    type: SET_MIN_VALUE,
    payload: minValue,
  });
};

export const setTime = payload => ({
  type: SET_TIME,
  payload,
});

export const setPlan = payload => ({
  type: SET_PLAN,
  payload,
});

export const setWithPlan = () => (dispatch, getState) => {
  const state = getState();
  let result = '-';
  const value1 = state.homeReducer.time - state.homeReducer.plan;
  const value2 = state.homeReducer.minValue + state.homeReducer.minValue * 0.1;
  result = state.homeReducer.minValue === 0 ? '-' : value1 * value2;
  if (
    state.homeReducer.minValue === '-'
    || state.homeReducer.originValue === state.homeReducer.destinyValue
  ) {
    result = '-';
  }
  return dispatch({
    type: SET_WITH_PLAN,
    payload: result === '-' ? result : result.toFixed(2),
  });
};

export const setWithoutPlan = () => (dispatch, getState) => {
  const state = getState();
  let result = '-';
  result = state.homeReducer.minValue === 0
    ? null
    : state.homeReducer.time * state.homeReducer.minValue;
  if (
    state.homeReducer.minValue === '-'
    || state.homeReducer.originValue === state.homeReducer.destinyValue
  ) {
    result = '-';
  }
  return dispatch({
    type: SET_WITHOUT_PLAN,
    payload: result === '-' ? result : result.toFixed(2),
  });
};

export const clear = () => ({
  type: CLEAR,
});

export const clearTable = () => ({
  type: CLEAR_TABLE,
});

export const addTable = payload => ({
  type: ADD_TABLE,
  payload,
});

export const setTable = payload => ({
  type: SET_TABLE,
  payload,
});

export const getTableInit = () => (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  axios.get('http://127.0.0.1:4000/table/list', headers).then((res) => {
    dispatch({
      type: SET_TABLE,
      payload: res.data,
    });
  });
};
