/* eslint-disable no-case-declarations */
import { CONSTANTS } from '../actions';

const initialState = [];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_LISTS:
      return action.payload;
    case CONSTANTS.ADD_STATUS_LIST:
      return [...state, action.payload];
    // Need to wrap in squigglies or else we get an arg name error with other case
    // newState const naming
    case CONSTANTS.ADD_APPLICATION: {
      const newState = state.map(list => {
        if (list.id === action.payload.status_list) {
          return {
            ...list,
            applications: [...list.applications, action.payload]
          };
        } else return list;
      });
      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
      } = action.payload;

      const newState = [...state];

      // Determining if we're dragging a list or a card...
      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      // Handling case if in same list...
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.list_id);
        const application = list.applications.splice(droppableIndexStart, 1);
        list.applications.splice(droppableIndexEnd, 0, ...application);
      }

      // Handling case if moving between lists...
      if (droppableIdStart !== droppableIdEnd) {
        // Finding list where drag happened
        const listStart = state.find(list => droppableIdStart === list.list_id);

        // Pull out card from the list...
        const applicatication = listStart.applications.splice(
          droppableIndexStart,
          1
        );

        // Finding list where dragging ended...
        const listEnd = state.find(list => droppableIdEnd === list.list_id);

        // Placing card in new list
        listEnd.applications.splice(droppableIndexEnd, 0, ...applicatication);
      }

      return newState;
    default:
      return state;
  }
};

export default listsReducer;
