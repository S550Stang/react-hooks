import React, { useState, createContext } from "react";

export const CounterContextApi = createContext();

export const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);

  const incrementFunction = () => {
    setCount(count + 1);
  };
  const decrementFunction = () => {
    setCount(count - 1);
  };

  const value = { count, incrementFunction, decrementFunction };

  return (
    <CounterContextApi.Provider value={value}>
      {props.children}
    </CounterContextApi.Provider>
  );
};

export default CounterContextProvider;
