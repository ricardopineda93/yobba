import React from 'react';
import AppCard from './AppCard';
import ActionButton from './ActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const StatusList = ({ title, applications, listId, index }) => {
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {provided => (
        <div
          className="list-container"
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listId)}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{title}</h4>
                {applications.map((application, index) => (
                  <AppCard
                    application={application}
                    key={application.id}
                    id={application.id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <ActionButton listId={listId} />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default StatusList;
