import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const AppCard = ({ application, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          className="card border-primary mb-3"
          style={{ maxWidth: '20rem' }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
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
      )}
    </Draggable>
  );
};

export default AppCard;
