import React from 'react';
import AppCard from './AppCard';

const StatusList = ({ title, applications }) => {
  return (
    <div className="list-container">
      <h4>{title}</h4>
      {applications.map(application => (
        <AppCard application={application} key={application.id} />
      ))}
    </div>
  );
};

export default StatusList;
