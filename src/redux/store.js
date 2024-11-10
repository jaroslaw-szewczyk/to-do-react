import { createStore } from 'redux';
import initialStore from './initialStore';
import { nanoid } from 'nanoid';

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns ,{ id: nanoid(), ...action.payload}]};
      break;
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {id: nanoid(), ...action.payload}]};
      break;
    case 'SEARCH':
      return {...state, searchPhrase: action.payload.searchPhrase};
      break;
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;