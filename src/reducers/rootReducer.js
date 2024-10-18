import { combineReducers } from 'redux';
import { recipeReducer } from './recipeReducer';

// Combine all reducers here and export as default
const rootReducer = combineReducers({
  recipeReducer,
});

export default rootReducer;
