/* eslint-disable camelcase */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addApplication } from '../../actions';

class Form extends Component {
  state = {
    company_name: '',
    position: '',
    location: '',
    date_applied: new Date().toISOString().substr(0, 10),
    application_id: '',
    application_url: '',
    priority_level: 'Neutral',
    company_contact_email: '',
    notes: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { dispatch } = this.props;

    const newApplication = {
      ...this.state,
      status_list: this.props.listId.split('-')[1]
    };

    dispatch(addApplication(this.props.listId, newApplication));

    this.setState({
      company_name: '',
      position: '',
      location: '',
      date_applied: new Date().toISOString().substr(0, 10),
      application_id: '',
      application_url: '',
      priority_level: 'Neutral',
      company_contact_email: '',
      notes: ''
    });
  };

  render() {
    const {
      company_name,
      position,
      location,
      date_applied,
      application_id,
      application_url,
      priority_level,
      company_contact_email,
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
              name="company_name"
              onChange={this.onChange}
              value={company_name}
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
              name="date_applied"
              onChange={this.onChange}
              value={date_applied}
            />
          </div>
          <div className="form-group">
            <label>Application ID</label>
            <input
              className="form-control"
              type="text"
              name="application_id"
              onChange={this.onChange}
              value={application_id}
            />
          </div>
          <div className="form-group">
            <label>Application URL</label>
            <input
              className="form-control"
              type="url"
              name="application_url"
              onChange={this.onChange}
              value={application_url}
            />
          </div>
          <div className="form-group">
            <label>Priority Level</label>
            <select
              className="form-control"
              required
              name="priority_level"
              onChange={this.onChange}
              value={priority_level}
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
              name="company_contact_email"
              onChange={this.onChange}
              value={company_contact_email}
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
