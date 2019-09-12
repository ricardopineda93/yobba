import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addApplication } from '../../actions';

class Form extends Component {
  state = {
    companyName: '',
    position: '',
    location: '',
    dateApplied: new Date().toISOString().substr(0, 10),
    applicationId: '',
    applicationURL: '',
    priorityLevel: 'Neutral',
    companyContactEmail: '',
    notes: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { dispatch } = this.props;

    dispatch(addApplication(this.props.listId, { ...this.state }));

    this.setState({
      companyName: '',
      position: '',
      location: '',
      dateApplied: new Date().toISOString().substr(0, 10),
      applicationId: '',
      applicationURL: '',
      priorityLevel: 'Neutral',
      companyContactEmail: '',
      notes: ''
    });
  };

  render() {
    const {
      companyName,
      position,
      location,
      dateApplied,
      applicationId,
      applicationURL,
      priorityLevel,
      companyContactEmail,
      notes
    } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        {/* <h2>Add Application</h2>s */}
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
            <label>Application ID</label>
            <input
              className="form-control"
              type="text"
              name="applicationId"
              onChange={this.onChange}
              value={applicationId}
            />
          </div>
          <div className="form-group">
            <label>Application URL</label>
            <input
              className="form-control"
              type="url"
              name="applicationURL"
              onChange={this.onChange}
              value={applicationURL}
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
          <div className="form-group">
            <label>Company Contact Email</label>
            <input
              className="form-control"
              type="email"
              name="companyContactEmail"
              onChange={this.onChange}
              value={companyContactEmail}
            />
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea
              className="form-control"
              type="text"
              name="notes"
              onChange={this.onChange}
              value={notes}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Save Application
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Form);
