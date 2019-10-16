/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const CHANGE_FILTER = createActionName('CHANGE_FILTER');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeSearchDuration = payload => ({ payload, type: CHANGE_DURATION });
export const changeSearchFilter = payload => ({ payload, type: CHANGE_FILTER });
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      console.log('payload searcy to: ', action.payload);
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION:
      console.log('payload to: ', action.payload);
      if(action.payload.type == 'from'){
        return {
          ...statePart,
          duration: action.payload.changeFrom,
        };
      } else if(action.payload.type == 'to'){
        return {
          ...statePart,
          duration: action.payload.changeTo,
        };
      }
      break;

    case CHANGE_FILTER:
      return{
        ...statePart,
        tags: [action.payload],
      };
    default:
      return statePart;
  }
}
