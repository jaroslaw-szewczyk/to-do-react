import { createStore } from 'redux';
import initialStore from './initialStore';
import { nanoid } from 'nanoid';
import { strContains } from '../utils/strContains';

export const getFilteredCards = ({cards, searchPhrase}, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchPhrase));
export const getAllColumns = (({ columns }) => columns);
export const getAllLists = (({ lists }) => lists);
export const getListById = ({ lists },id) => lists.find(iteam => iteam.id === id);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId)
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const updateSearchiString = payload => ({type: 'SEARCH', payload});

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