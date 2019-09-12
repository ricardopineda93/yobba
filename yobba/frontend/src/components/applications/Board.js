import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import StatusList from './StatusList';
import ActionButton from './ActionButton';

function Board(props) {
  const { lists } = props;

  return (
    <Fragment>
      <div className="board-lists-container">
        {lists.map(list => (
          <StatusList
            title={list.title}
            applications={list.applications}
            key={list.id}
          />
        ))}
        <ActionButton className="list-container" list />
      </div>
    </Fragment>
  );
}

const mapState = state => ({
  lists: state.lists
});

export default connect(mapState)(Board);
