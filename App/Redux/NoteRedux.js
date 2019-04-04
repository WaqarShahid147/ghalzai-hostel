/* eslint-disable implicit-arrow-linebreak */
import { AsyncStorage } from 'react-native';
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { find } from 'lodash';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeTitle: ['title'],
  changeNote: ['body'],
  createNote: ['note'],
  clearNotes: null,
  saveNotes: ['notes'],
  setCurrentNote: ['note'],
  setCurrentNoteId: ['id'],
  updateNote: ['note'],
  deleteNote: null,
});

export const NoteTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  note: {},
  notes: {},
  localNotes: {},
  currentNote: {},
  currentNoteId: null,
});

/* ------------- Reducers ------------- */

export const changeTitle = (state, { title }) =>
  state.setIn(['note', 'title'], title);

export const changeNote = (state, { body }) =>
  state.setIn(['note', 'body'], body);

export const createNote = (state, { note }) => {
  const createdAt = new Date();
  const id = createdAt.getTime();
  const newState = state.merge({
    notes: {
      ...state.notes,
      [id]: { ...note, id, createdAt },
    },
  });
  AsyncStorage.setItem('notes', JSON.stringify(newState.notes));
  return newState;
};

export const clearNotes = state =>
  state.set('note', {});

export const saveNotes = (state, { notes }) =>
  state.merge({ localNotes: notes });

export const setCurrentNote = (state, { note }) =>
  state.set('currentNote', note);

export const setCurrentNoteId = (state, { id }) =>
  state.set('currentNoteId', id);

export const updateNote = (state, { note }) => {
  const createdAt = new Date();
  const id = state.currentNoteId;
  const newState = state.merge({
    notes: {
      ...state.notes,
      [id]: { ...note, id, createdAt },
    },
  });
  AsyncStorage.setItem('notes', JSON.stringify(newState.notes));
  return state;
};

export const deleteNote = (state) => {
  const id = state.currentNoteId;
  const newState = state;
  delete newState.notes[id];
  AsyncStorage.setItem('notes', JSON.stringify(newState.notes));
  return newState;
};

// add new reducer here

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_TITLE]: changeTitle,
  [Types.CHANGE_NOTE]: changeNote,
  [Types.CREATE_NOTE]: createNote,
  [Types.CLEAR_NOTES]: clearNotes,
  [Types.SAVE_NOTES]: saveNotes,
  [Types.SET_CURRENT_NOTE]: setCurrentNote,
  [Types.SET_CURRENT_NOTE_ID]: setCurrentNoteId,
  [Types.UPDATE_NOTE]: updateNote,
  [Types.DELETE_NOTE]: deleteNote,

  // add reducer hook up here
});
