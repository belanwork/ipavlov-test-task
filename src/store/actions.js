export const emailAction = (value) => {
  return {
    type: 'setEmail',
    value,
  };
};

export const passwordAction = (value) => {
  return {
    type: 'setPassword',
    value,
  };
};

export const wrongFillingAction = (value) => {
  return {
    type: 'setWrongFilling',
    value,
  };
};

export const resetWrongFillingAction = () => {
  return {
    type: 'resetWrongFilling',
  };
};

export const setPreloaderAction = (value) => {
  return {
    type: 'setPreloader',
    value,
  };
};

export const setLoginSuccessAction = (value) => {
  return {
    type: 'setLoginSuccess',
    value,
  };
};
