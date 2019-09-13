/* eslint-disable no-case-declarations */
import { CONSTANTS } from '../actions';

let listId = 4;
let applicationId = 12;

const initialState = [
  {
    title: 'Application Sent',
    id: `list-${0}`,
    applications: [
      {
        id: `application-${0}`,
        companyName: 'Spotify',
        position: 'Web Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        priorityLevel: 'High',
        companyContactEmail: 'jane@doe.com',
        notes: 'This job would be dope!'
      },
      {
        id: `application-${1}`,
        companyName: 'Etsy',
        position: 'Front End Developer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        priorityLevel: 'Neutral',
        companyContactEmail: 'jane@doe.com',
        notes: 'This job would be dope!'
      }
    ]
  },
  {
    title: 'Phone Screen',
    id: `list-${1}`,
    applications: [
      {
        id: `application-${2}`,
        companyName: 'PacSun',
        position: 'Brand Content Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        priorityLevel: 'Neutral',
        companyContactEmail: 'jane@doe.com',
        notes: 'This job would be dope!'
      }
    ]
  },
  {
    title: 'Technical Assessment',
    id: `list-${2}`,
    applications: [
      {
        id: `application-${3}`,
        companyName: 'Capital One',
        position: 'Data Team Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        priorityLevel: 'Neutral',
        companyContactEmail: 'jane@doe.com',
        notes: 'This job would be dope!'
      },
      {
        id: `application-${4}`,
        companyName: 'Foursquare',
        position: 'Client Solutions Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        priorityLevel: 'Neutral',
        companyContactEmail: 'jane@doe.com',
        notes: 'This job would be dope!'
      },
      {
        id: `application-${5}`,
        companyName: 'E&Y',
        position: 'Jr. Web Developer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        priorityLevel: 'Neutral',
        companyContactEmail: 'jane@doe.com',
        notes: 'This job would be dope!'
      }
    ]
  },
  {
    title: 'Behavioral Interview',
    id: `list-${3}`,
    applications: [
      {
        id: `application-${6}`,
        companyName: 'Chase',
        position: 'Security Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        priorityLevel: 'Neutral',
        companyContactEmail: 'jane@doe.com',
        notes: 'This job would be dope!'
      }
    ]
  },
  {
    title: 'Final Rounds',
    id: `list-${4}`,
    applications: [
      {
        id: `application-${7}`,
        companyName: 'Kinetik',
        position: 'Software Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        priorityLevel: 'Neutral',
        companyContactEmail: 'jane@doe.com',
        notes: 'This job would be dope!'
      }
    ]
  },
  {
    title: 'Graveyard',
    id: 4,
    applications: [
      {
        id: `application-${8}`,
        companyName: 'System',
        position: 'Front End Engineer',
        dateApplied: '2019-09-10',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        priorityLevel: 'Neutral',
        companyContactEmail: 'jane@doe.com',
        notes: 'This job would be dope!'
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_STATUS_LIST:
      const newList = {
        title: action.payload,
        applications: [],
        id: `list-${listId}`
      };
      listId++;
      return [...state, newList];
    // Need to wrap in squigglies or else we get an arg name error with other case
    // newState const naming
    case CONSTANTS.ADD_APPLICATION: {
      const newApplication = {
        id: `application-${applicationId}`,
        ...action.payload.data
      };
      applicationId++;
      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            applications: [...list.applications, newApplication]
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
        draggableId
      } = action.payload;

      const newState = [...state];

      // Handling case if in same list...
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const application = list.applications.splice(droppableIndexStart, 1);
        list.applications.splice(droppableIndexEnd, 0, ...application);
      }
      return newState;
    default:
      return state;
  }
};

export default listsReducer;
