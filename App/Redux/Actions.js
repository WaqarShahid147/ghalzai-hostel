import AuthActions from './AuthRedux';
import NoteActions from './NoteRedux';
// ADD_IMPORT

export default {
  ...AuthActions,
  ...NoteActions,
  // ADD_ACTIONS
};
