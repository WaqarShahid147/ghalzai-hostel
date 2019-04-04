import { StartupTypes } from './StartupRedux';
import { AuthTypes } from './AuthRedux';
import { NoteTypes } from './NoteRedux';
// ADD_IMPORT

export default {
  ...StartupTypes,
  ...AuthTypes,
  ...NoteTypes,
  // ADD_ACTION_TYPE
};
