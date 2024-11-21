import { nanoid } from 'nanoid';

export const getAllLists = (({ lists }) => lists);
export const getListById = ({ lists },id) => lists.find(iteam => iteam.id === id);

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');
const REMOVE_LIST = createActionName('REMOVE_LIST');

export const addList = payload => ({type: ADD_LIST, payload});
export const removeList = payload => ({type: REMOVE_LIST, payload});

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: nanoid() }];
    case REMOVE_LIST:
      return statePart.filter(list => list.id !== action.payload);
    default:
      return statePart;
  }
}

export default listsReducer;