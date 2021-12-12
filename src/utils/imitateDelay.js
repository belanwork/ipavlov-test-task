import {
  setPreloaderAction,
} from '../store/actions';

export const imitateDelay = (ms, dispatch) => {
  return new Promise((res, rej) => {
    dispatch(setPreloaderAction(true));
    setTimeout(() => {
      dispatch(setPreloaderAction(false));
      res(true);
    }, ms);
  });
};
