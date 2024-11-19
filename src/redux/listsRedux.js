import { nanoid } from 'nanoid';

export const getAllLists = (({ lists }) => lists);
export const getListById = ({ lists },id) => lists.find(iteam => iteam.id === id);

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

export const addList = payload => ({type: ADD_LIST, payload});

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: nanoid() }];
    default:
      return statePart;
  }
}

export default listsReducer;