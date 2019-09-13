import React from 'react';
import AppCard from './AppCard';
import ActionButton from './ActionButton';
import { Droppable } from 'react-beautiful-dnd';

const StatusList = ({ title, applications, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {provided => (
        <div
          className="list-container"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h4>{title}</h4>
          {applications.map((application, index) => (
            <AppCard
              application={application}
              key={application.id}
              id={application.id}
              index={index}
            />
          ))}
          <ActionButton listId={listId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default StatusList;
