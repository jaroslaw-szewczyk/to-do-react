import { createStore } from 'redux';
import initialStore from './initialStore';

const reducer = (state, action) => {
  return state;
};

const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;