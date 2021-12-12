import React from 'react';
import {
  loginReducer,
} from './store';
import {
  passwordAction,
  emailAction,
  wrongFillingAction,
  resetWrongFillingAction,
  setLoginSuccessAction,
} from './store/actions';

import './styles/index.scss';

import {
  imitateDelay,
} from './utils/imitateDelay';

export const App = () => {
  const [state, dispatch] = loginReducer();
  const {
    email,
    password,
    wrongFilling,
    showPreloader,
    loginSuccess,
  } = state;

  const {
    emailWrong,
    passwordWrong,
  } = wrongFilling;

  const onFormSubmit = (e) => {
    e.preventDefault();
    const randomDelay = Math.random() * 2000 + 1000;
    dispatch(setLoginSuccessAction(false));
    imitateDelay(randomDelay, dispatch)
      .then(() => {
        if (!email.length || !password.length) {
          return dispatch(wrongFillingAction({
            emailWrong: !email.length,
            passwordWrong: !password.length,
          }));
        }
        const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailRegexp.test(email)) {
          return dispatch(wrongFillingAction({
            emailWrong: true,
            passwordWrong: false,
          }));
        }
        dispatch(setLoginSuccessAction(true));
      });
  };

  const onEmailChange = (e) => {
    dispatch(emailAction(e.target.value));
  };

  const onPasswordChange = (e) => {
    dispatch(passwordAction(e.target.value));
  };

  const onInputClick = () => {
    dispatch(setLoginSuccessAction(false));
    dispatch(resetWrongFillingAction());
  };

  return (
    <div
      className='app'>
      {!showPreloader
        ? (
          <>
            <p
              className='title'>
              account login
            </p>
            <form
              className='form'
              onSubmit={onFormSubmit}>
              <div
                className='form__inputsWrapper'>
                <div
                  className='form__inputWrapper'>
                  <input
                    type='text'
                    className={`formInput ${emailWrong && 'formInput__error'}`}
                    placeholder='Email'
                    value={email}
                    onChange={onEmailChange}
                    onClick={onInputClick}
                  />
                  <div
                    className='formInput__focus'></div>
                </div>
                <div
                  className='form__inputWrapper'>
                  <input
                    type='password'
                    className={`formInput ${passwordWrong && 'formInput__error'}`}
                    placeholder='Password'
                    value={password}
                    onChange={onPasswordChange}
                    onClick={onInputClick}
                  />
                  <div
                    className='formInput__focus'></div>
                </div>
              </div>
              <button
                type='submit'
                className='formSubmitButton'>
                sign in
              </button>
            </form>
          </>
        )
        : <div
            className='loader'>
        </div>}
      {
        loginSuccess
        && <div
          className='success'>
          SUCCESS !!!
        </div>
      }
    </div>
  );
};
