import * as React from "react";
import { Button } from "antd";
import { CounterContext } from "../context/counter";

const styles = {
  div: {
    alignContent: "center"
  }
} as const;

export const Counter = () => {
  const { state, onClickIncrement, onClickDecrement } = React.useContext(
    CounterContext
  );
  return (
    <div style={styles.div}>
      <h3>Counter</h3>
      <p>
        {state.count}
        {state.unit}
      </p>
      <Button type="primary" onClick={onClickIncrement}>
        increment
      </Button>
      <Button type="danger" onClick={onClickDecrement}>
        decrement
      </Button>
    </div>
  );
};
