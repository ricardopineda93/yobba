import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import TextArea from 'react-textarea-autosize';
import FormModal from './FormModal';
import { connect } from 'react-redux';
import { addStatusList } from '../../actions';

class ActionButton extends Component {
  state = {
    formOpen: false,
    title: ''
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? 'Add another list' : 'Add another application';
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? 'white' : 'inherit';
    const buttonTextBackground = list ? '#dfe3e6' : 'inherit';
    return list ? (
      <div
        onClick={this.openForm}
        className="open-form-button-group"
        style={{
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground
        }}
      >
        <AddIcon />
        {buttonText}
      </div>
    ) : (
      <button
        type="button"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        onClick={this.openForm}
        style={{
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
          border: 'none'
        }}
      >
        <AddIcon />
        {buttonText}
      </button>
    );
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  handleAddList = e => {
    // const { dispatch } = this.props;
    const { title } = this.state;

    if (title) {
      this.props.addStatusList({ title });
      this.setState({ title: '' });
    }

    return;
  };

  handleInputChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  renderForm = () => {
    const { list } = this.props;

    const placeHolder = list
      ? 'Enter list title...'
      : 'Enter a title for this card...';

    const buttonTitle = list ? 'Add List' : 'Add Application';

    return (
      <div>
        {list ? (
          <>
            <div
              className="card border-primary mb-3"
              style={{
                minHeight: 60,
                minWidth: 272,
                padding: '6px 8px 2px',
                marginTop: 15
              }}
            >
              <TextArea
                placeholder={placeHolder}
                autoFocus
                onBlur={this.closeForm}
                value={this.state.title}
                onChange={this.handleInputChange}
                style={{
                  resize: 'none',
                  width: '100%',
                  outline: 'none',
                  border: 'none',
                  overflow: 'hidden'
                }}
              />
            </div>
            <div className="form-button-group">
              <button
                type="button"
                className="btn btn-primary"
                onMouseDown={this.handleAddList}
              >
                {buttonTitle}{' '}
              </button>
              <CloseIcon
                style={{ marginLeft: 8, cursor: 'pointer' }}
                onClick={this.closeForm}
              />
            </div>
          </>
        ) : (
          <>
            <FormModal listId={this.props.listId} />
            <button
              type="button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              style={{
                opacity: 0.5,
                color: 'inherit',
                backgroundColor: 'inherit',
                border: 'none'
              }}
            >
              <AddIcon />
              Add another application
            </button>
          </>
        )}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.formOpen ? this.renderForm() : this.renderAddButton()}
      </div>
    );
  }
}

export default connect(
  null,
  { addStatusList }
)(ActionButton);
