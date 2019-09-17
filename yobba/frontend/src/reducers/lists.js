/* eslint-disable no-case-declarations */
import { CONSTANTS } from '../actions';

let listId = 4;
let applicationId = 12;

// const initialState = [
//   {
//     title: 'Application Sent',
//     id: `list-${0}`,
//     applications: [
//       {
//         id: `application-${0}`,
//         companyName: 'Spotify',
//         position: 'Web Engineer',
//         dateApplied: '2019-09-10',
//         location: 'New York',
//         applicationId: 'mgs1',
//         applicationURL: 'https://morgan.stanley/applicatication/mgs1',
//         priorityLevel: 'High',
//         companyContactEmail: 'jane@doe.com',
//         notes: 'This job would be dope!'
//       },
//       {
//         id: `application-${1}`,
//         companyName: 'Etsy',
//         position: 'Front End Developer',
//         dateApplied: '2019-09-10',
//         location: 'New York',
//         applicationId: 'mgs1',
//         applicationURL: 'https://morgan.stanley/applicatication/mgs1',
//         priorityLevel: 'Neutral',
//         companyContactEmail: 'jane@doe.com',
//         notes: 'This job would be dope!'
//       }
//     ]
//   },
//   {
//     title: 'Phone Screen',
//     id: `list-${1}`,
//     applications: [
//       {
//         id: `application-${2}`,
//         companyName: 'PacSun',
//         position: 'Brand Content Engineer',
//         dateApplied: '2019-09-10',
//         location: 'New York',
//         applicationId: 'mgs1',
//         applicationURL: 'https://morgan.stanley/applicatication/mgs1',
//         priorityLevel: 'Neutral',
//         companyContactEmail: 'jane@doe.com',
//         notes: 'This job would be dope!'
//       }
//     ]
//   },
//   {
//     title: 'Technical Assessment',
//     id: `list-${2}`,
//     applications: [
//       {
//         id: `application-${3}`,
//         companyName: 'Capital One',
//         position: 'Data Team Engineer',
//         dateApplied: '2019-09-10',
//         location: 'New York',
//         applicationId: 'mgs1',
//         applicationURL: 'https://morgan.stanley/applicatication/mgs1',
//         priorityLevel: 'Neutral',
//         companyContactEmail: 'jane@doe.com',
//         notes: 'This job would be dope!'
//       },
//       {
//         id: `application-${4}`,
//         companyName: 'Foursquare',
//         position: 'Client Solutions Engineer',
//         dateApplied: '2019-09-10',
//         location: 'New York',
//         applicationId: 'mgs1',
//         applicationURL: 'https://morgan.stanley/applicatication/mgs1',
//         priorityLevel: 'Neutral',
//         companyContactEmail: 'jane@doe.com',
//         notes: 'This job would be dope!'
//       },
//       {
//         id: `application-${5}`,
//         companyName: 'E&Y',
//         position: 'Jr. Web Developer',
//         dateApplied: '2019-09-10',
//         location: 'New York',
//         applicationId: 'mgs1',
//         applicationURL: 'https://morgan.stanley/applicatication/mgs1',
//         priorityLevel: 'Neutral',
//         companyContactEmail: 'jane@doe.com',
//         notes: 'This job would be dope!'
//       }
//     ]
//   }
// ];

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
