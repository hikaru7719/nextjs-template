import * as React from "react";

export const useFormInput = (initilaValue: string) => {
  const [value, setValue] = React.useState(initilaValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset
  };
};
