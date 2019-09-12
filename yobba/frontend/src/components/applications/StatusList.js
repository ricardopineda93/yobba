import React from 'react';
import AppCard from './AppCard';
import ActionButton from './ActionButton';

const StatusList = ({ title, applications, listId }) => {
  return (
    <div className="list-container">
      <h4>{title}</h4>
      {applications.map(application => (
        <AppCard application={application} key={application.id} />
      ))}
      <ActionButton listId={listId} />
    </div>
  );
};

export default StatusList;
