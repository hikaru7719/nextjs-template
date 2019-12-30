import * as React from "react";
import { State, initialState, reducer } from "./reducer";
import { decrement, increment } from "./actionCreators";

type ContextType = {
  onClickIncrement: () => void;
  onClickDecrement: () => void;
  state: State;
};
export const CounterContext = React.createContext<ContextType>(
  {} as ContextType
);

export const CounterContextProvidor: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ count: 0 })
  );
  const onClickIncrement = () => {
    dispatch(increment());
  };
  const onClickDecrement = () => {
    dispatch(decrement());
  };
  return (
    <CounterContext.Provider
      value={{ onClickIncrement, onClickDecrement, state }}
    >
      {children}
    </CounterContext.Provider>
  );
};
