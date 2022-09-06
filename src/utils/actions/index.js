export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const resetCount = () => {
  return {
    type: "RESET_COUNT",
  };
};

export const changeColor = (colorChoice) => {
  return {
    type: "CHANGE_COLOR",
    payload: colorChoice
  };
};

export const resetColor = () => {
  return {
    type: "RESET_COLOR",
  };
};
