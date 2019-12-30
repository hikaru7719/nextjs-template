import * as React from "react";
import { CounterContextProvidor } from "./counter";

export const ContextProvider: React.FC<React.Props<{}>> = ({ children }) => {
  return <CounterContextProvidor>{children}</CounterContextProvidor>;
};
