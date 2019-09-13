import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import StatusList from './StatusList';
import ActionButton from './ActionButton';
import { sort } from '../../actions';

function Board(props) {
  const { lists } = props;

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {provided => (
          <div
            className="board-lists-container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {lists.map((list, index) => (
              <StatusList
                title={list.title}
                applications={list.applications}
                key={list.id}
                listId={list.id}
                index={index}
              />
            ))}
            {provided.placeholder}
            <ActionButton className="list-container" list />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const mapState = state => ({
  lists: state.lists
});

export default connect(mapState)(Board);
