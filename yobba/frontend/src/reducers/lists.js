const initialState = [
  {
    title: 'Application Sent',
    id: 0,
    applications: [
      {
        id: 3,
        companyName: 'Morgan Stanley',
        position: 'Web Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        applicationStatus: 'Application Sent',
        priorityLevel: 'Neutral',
        companyContactName: 'Jane Doe',
        companyContactEmail: 'jane@doe.com',
        companyContactPhone: '717-231-4455',
        notes: 'This job would be dope!',
        createdAt: '2019-09-10T14:53:37.360640Z',
        updatedAt: '2019-09-10T14:53:37.360784Z'
      },
      {
        id: 3,
        companyName: 'Morgan Stanley',
        position: 'Web Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        applicationStatus: 'Application Sent',
        priorityLevel: 'Neutral',
        companyContactName: 'Jane Doe',
        companyContactEmail: 'jane@doe.com',
        companyContactPhone: '717-231-4455',
        notes: 'This job would be dope!',
        createdAt: '2019-09-10T14:53:37.360640Z',
        updatedAt: '2019-09-10T14:53:37.360784Z'
      }
    ]
  },
  {
    title: 'Phone Screen',
    id: 1,
    applications: [
      {
        id: 3,
        companyName: 'Morgan Stanley',
        position: 'Web Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        applicationStatus: 'Application Sent',
        priorityLevel: 'Neutral',
        companyContactName: 'Jane Doe',
        companyContactEmail: 'jane@doe.com',
        companyContactPhone: '717-231-4455',
        notes: 'This job would be dope!',
        createdAt: '2019-09-10T14:53:37.360640Z',
        updatedAt: '2019-09-10T14:53:37.360784Z'
      }
    ]
  },
  {
    title: 'Technical Assessment',
    id: 2,
    applications: [
      {
        id: 3,
        companyName: 'Morgan Stanley',
        position: 'Web Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        applicationStatus: 'Application Sent',
        priorityLevel: 'Neutral',
        companyContactName: 'Jane Doe',
        companyContactEmail: 'jane@doe.com',
        companyContactPhone: '717-231-4455',
        notes: 'This job would be dope!',
        createdAt: '2019-09-10T14:53:37.360640Z',
        updatedAt: '2019-09-10T14:53:37.360784Z'
      },
      {
        id: 3,
        companyName: 'Morgan Stanley',
        position: 'Web Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        applicationStatus: 'Application Sent',
        priorityLevel: 'Neutral',
        companyContactName: 'Jane Doe',
        companyContactEmail: 'jane@doe.com',
        companyContactPhone: '717-231-4455',
        notes: 'This job would be dope!',
        createdAt: '2019-09-10T14:53:37.360640Z',
        updatedAt: '2019-09-10T14:53:37.360784Z'
      },
      {
        id: 3,
        companyName: 'Morgan Stanley',
        position: 'Web Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        applicationStatus: 'Application Sent',
        priorityLevel: 'Neutral',
        companyContactName: 'Jane Doe',
        companyContactEmail: 'jane@doe.com',
        companyContactPhone: '717-231-4455',
        notes: 'This job would be dope!',
        createdAt: '2019-09-10T14:53:37.360640Z',
        updatedAt: '2019-09-10T14:53:37.360784Z'
      }
    ]
  },
  {
    title: 'Behavioral Interview',
    id: 2,
    applications: [
      {
        id: 3,
        companyName: 'Morgan Stanley',
        position: 'Web Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        applicationStatus: 'Application Sent',
        priorityLevel: 'Neutral',
        companyContactName: 'Jane Doe',
        companyContactEmail: 'jane@doe.com',
        companyContactPhone: '717-231-4455',
        notes: 'This job would be dope!',
        createdAt: '2019-09-10T14:53:37.360640Z',
        updatedAt: '2019-09-10T14:53:37.360784Z'
      }
    ]
  },
  {
    title: 'Final Rounds',
    id: 3,
    applications: [
      {
        id: 3,
        companyName: 'Morgan Stanley',
        position: 'Web Engineer',
        dateApplied: '2019-09-10',
        location: 'New York',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        applicationStatus: 'Application Sent',
        priorityLevel: 'Neutral',
        companyContactName: 'Jane Doe',
        companyContactEmail: 'jane@doe.com',
        companyContactPhone: '717-231-4455',
        notes: 'This job would be dope!',
        createdAt: '2019-09-10T14:53:37.360640Z',
        updatedAt: '2019-09-10T14:53:37.360784Z'
      }
    ]
  },
  {
    title: 'Graveyard',
    id: 4,
    applications: [
      {
        id: 3,
        companyName: 'Morgan Stanley',
        position: 'Web Engineer',
        dateApplied: '2019-09-10',
        applicationId: 'mgs1',
        applicationURL: 'https://morgan.stanley/applicatication/mgs1',
        applicationStatus: 'Application Sent',
        priorityLevel: 'Neutral',
        companyContactName: 'Jane Doe',
        companyContactEmail: 'jane@doe.com',
        companyContactPhone: '717-231-4455',
        notes: 'This job would be dope!',
        createdAt: '2019-09-10T14:53:37.360640Z',
        updatedAt: '2019-09-10T14:53:37.360784Z'
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
