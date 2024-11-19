import { nanoid } from 'nanoid';
import { strContains } from '../utils/strContains';

export const getFilteredCards = ({cards, searchPhrase}, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchPhrase));
export const getAllColumns = (({ columns }) => columns);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

export const addColumn = payload => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: nanoid() }];
    default:
      return statePart;
  };
};

export default columnsReducer;