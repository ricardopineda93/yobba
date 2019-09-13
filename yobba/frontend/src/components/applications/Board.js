import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import StatusList from './StatusList';
import ActionButton from './ActionButton';

function Board(props) {
  const { lists } = props;

  const onDragEnd = () => {
    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-lists-container">
        {lists.map(list => (
          <StatusList
            title={list.title}
            applications={list.applications}
            key={list.id}
            listId={list.id}
          />
        ))}
        <ActionButton className="list-container" list />
      </div>
    </DragDropContext>
  );
}

const mapState = state => ({
  lists: state.lists
});

export default connect(mapState)(Board);
