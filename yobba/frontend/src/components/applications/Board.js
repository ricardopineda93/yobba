import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import StatusList from './StatusList';
import ActionButton from './ActionButton';
import { sort, getLists } from '../../actions';

class Board extends Component {
  componentDidMount() {
    this.props.getLists();
  }
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
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
                  key={list.list_id}
                  listId={list.list_id}
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
}

const mapState = state => ({
  lists: state.lists
});

export default connect(
  mapState,
  { getLists, sort }
)(Board);
