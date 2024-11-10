import { createStore } from 'redux';
import initialStore from './initialStore';
import { nanoid } from 'nanoid';
import { strContains } from '../utils/strContains';

export const getFilteredCards = ({cards, searchPhrase}, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchPhrase));
export const getAllColumns = (({ columns }) => columns);
// const columns = useSelector(state => state.columns);

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns ,{ id: nanoid(), ...action.payload}]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {id: nanoid(), ...action.payload}]};
    case 'SEARCH':
      return {...state, searchPhrase: action.payload.searchPhrase};
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