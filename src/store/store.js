import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';  // Default import

const store = configureStore({
  reducer: rootReducer,
});

export default store;

