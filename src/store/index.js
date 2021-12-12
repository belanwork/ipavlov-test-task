import {
  useReducer,
} from 'react';

const initialState = {
  email: '',
  password: '',
  wrongFilling: {
    emailWrong: false,
    passwordWrong: false,
  },
  loginSuccess: false,
};

const reducer = (state, action) => {
  const {
    type, value,
  } = action;
  switch (type) {
    case 'setEmail': {
      return {
        ...state,
        wrongFilling: {
          ...state.wrongFilling,
          emailWrong: false,
        },
        email: value,
        loginSuccess: false,
      };
    }
    case 'setPassword': {
      return {
        ...state,
        wrongFilling: {
          ...state.wrongFilling,
          passwordWrong: false,
        },
        password: value,
        loginSuccess: false,
      };
    }
    case 'setWrongFilling': {
      return {
        ...state,
        wrongFilling: value,
      };
    }
    case 'resetWrongFilling': {
      return {
        ...state,
        wrongFilling: {
          emailWrong: false,
          passwordWrong: false,
        },
      };
    }
    case 'setPreloader': {
      return {
        ...state,
        showPreloader: value,
      };
    }
    case 'setLoginSuccess': {
      return {
        ...state,
        loginSuccess: value,
      };
    }
    default: {
      return state;
    }
  }
};

export const loginReducer = () => {
  return useReducer(reducer, initialState);
};
