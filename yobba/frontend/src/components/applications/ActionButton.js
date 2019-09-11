import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import TextArea from 'react-textarea-autosize';

export default class ActionButton extends Component {
  state = {
    formOpen: false,
    text: '',
    companyName: '',
    position: '',
    location: '',
    dateApplied: new Date().toISOString().substr(0, 10),
    priorityLevel: 'Neutral'
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? 'Add another list' : 'Add another application';
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? 'white' : 'inherit';
    const buttonTextBackground = list ? '#dfe3e6' : 'inherit';
    return (
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
        <p>{buttonText}</p>
      </div>
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

  // handleInputChange = e => {
  //   this.setState({
  //     text: e.target.value
  //   });
  // };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      companyName,
      position,
      location,
      dateApplied,
      priorityLevel
    } = this.state;

    const applicationInfo = {
      companyName,
      position,
      location,
      dateApplied,
      priorityLevel
    };

    console.log(applicationInfo);

    this.setState({
      companyName: '',
      position: '',
      location: '',
      dateApplied: new Date().toISOString().substr(0, 10),
      priorityLevel: 'Neutral'
    });
  };

  renderForm = () => {
    const { list } = this.props;

    const placeHolder = list
      ? 'Enter list title...'
      : 'Enter a title for this card...';

    const buttonTitle = list ? 'Add List' : 'Add Application';

    const {
      companyName,
      position,
      location,
      dateApplied,
      priorityLevel
    } = this.state;

    return (
      <div>
        <div
          className="card border-primary mb-3"
          style={{
            minHeight: 60,
            minWidth: 272,
            padding: '6px 8px 2px',
            marginTop: 15
          }}
        >
          {list ? (
            <TextArea
              placeholder={placeHolder}
              autoFocus
              onBlur={this.closeForm}
              value={this.state.text}
              onChange={this.handleInputChange}
              style={{
                resize: 'none',
                width: '100%',
                outline: 'none',
                border: 'none',
                overflow: 'hidden'
              }}
            />
          ) : (
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Company Name*</label>
                <input
                  className="form-control"
                  type="text"
                  name="companyName"
                  onChange={this.onChange}
                  value={companyName}
                  required
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label>Position*</label>
                <input
                  className="form-control"
                  type="text"
                  name="position"
                  onChange={this.onChange}
                  value={position}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date Applied</label>
                <input
                  className="form-control"
                  type="date"
                  name="dateApplied"
                  onChange={this.onChange}
                  value={dateApplied}
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  className="form-control"
                  type="text"
                  name="location"
                  onChange={this.onChange}
                  value={location}
                />
              </div>
              <div className="form-group">
                <label>Priority Level</label>
                <select
                  className="form-control"
                  required
                  name="priorityLevel"
                  onChange={this.onChange}
                  value={priorityLevel}
                >
                  <option value="High">High</option>
                  <option value="Neutral">Neutral</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </form>
          )}
        </div>
        <div className="form-button-group">
          <button
            type="button"
            className="btn btn-primary"
            onSubmit={this.onSubmit}
          >
            {buttonTitle}{' '}
          </button>
          <CloseIcon
            style={{ marginLeft: 8, cursor: 'pointer' }}
            onClick={this.closeForm}
          />
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}
