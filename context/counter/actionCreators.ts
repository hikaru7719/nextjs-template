import * as types from "./actionTypes";

export const increment = () => {
  return { type: types.INCREMENT };
};

export const decrement = () => {
  return { type: types.DECREMENT };
};

export const setCount = (amount: number) => {
  return { type: types.SET_COUNT, payload: { amount } };
};
