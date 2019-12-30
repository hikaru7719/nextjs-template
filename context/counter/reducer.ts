import * as creators from "./actionCreators";
import * as types from "./actionTypes";
import { CreatorsToActions } from "../creatorToActions";

export type State = {
  count: number;
  unit: string;
};

type Actions = CreatorsToActions<typeof creators>;

const initialState = (injects?: Partial<State>): State => {
  return {
    count: 0,
    unit: "pt",
    ...injects
  };
};

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, count: state.count + 1 };
    case types.DECREMENT:
      return { ...state, count: state.count - 1 };
    case types.SET_COUNT:
      return { ...state, count: action.payload.amount };
    default:
      throw new Error("action type is not found: counter reducer");
  }
};

export { reducer, initialState };
