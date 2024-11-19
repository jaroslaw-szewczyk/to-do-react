const createActionName = actionName => `app/search/${actionName}`;
const SEARCH = createActionName('SEARCH');

export const updateSearchiString = payload => ({type: SEARCH, payload});

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case SEARCH:
      return action.payload
    default:
      return statePart;
  };
};

export default searchStringReducer;