import React from 'react';

const AppCard = ({ application }) => {
  return (
    <div className="card border-primary mb-3" style={{ maxWidth: '20rem' }}>
      <div className="card-header">{application.position}</div>
      <div className="card-body">
        <h4 className="card-title">{application.companyName}</h4>
        <p className="card-text">
          <small>Date Applied</small>:{' '}
          <strong>{application.dateApplied}</strong>
        </p>
        <p className="card-text">
          <small>Location</small>: {application.location}
        </p>
        <p className="card-text">
          <small>Priority Level</small>: {application.priorityLevel}
        </p>
      </div>
    </div>
  );
};

export default AppCard;
