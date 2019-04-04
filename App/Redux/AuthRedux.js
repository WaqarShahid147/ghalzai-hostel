/* eslint-disable implicit-arrow-linebreak */
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeEmail: ['email'],
  changePassword: ['password'],
  saveUser: ['currentUser'],
  clearForm: null,
  clearLoginError: null,
  addError: ['error'],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  form: { error: {} },
  currentUser: {},
});

/* ------------- Reducers ------------- */

export const changeEmail = (state, { email }) =>
  state.setIn(['form', 'email'], email);

export const changePassword = (state, { password }) =>
  state.setIn(['form', 'password'], password);

export const saveUser = (state, { currentUser }) =>
  state.merge({ currentUser });

export const clearForm = state =>
  state.set('form', { error: {} });

export const clearLoginError = state =>
  state.setIn(['form', 'error'], {});

export const addError = (state, { error }) =>
  state.setIn(['form', 'error'], error);

// add new reducer here

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_EMAIL]: changeEmail,
  [Types.CHANGE_PASSWORD]: changePassword,
  [Types.SAVE_USER]: saveUser,
  [Types.CLEAR_FORM]: clearForm,
  [Types.CLEAR_LOGIN_ERROR]: clearLoginError,
  [Types.ADD_ERROR]: addError,
  // add reducer hook up here
});
