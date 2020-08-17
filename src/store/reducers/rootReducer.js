import trackReducer from './trackReducer'
import searchReducer from './searchReducer'
import utilReducer from './utilReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  track: trackReducer,
  search: searchReducer,
  util: utilReducer
});

export default rootReducer