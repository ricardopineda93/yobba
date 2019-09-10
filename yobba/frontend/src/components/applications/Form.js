import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    companyName: '',
    position: '',
    location: '',
    dateApplied: new Date().toISOString().substr(0, 10),
    applicationId: '',
    applicationURL: '',
    applicationStatus: 'Application Sent',
    priorityLevel: 'Neutral',
    companyContactName: '',
    companyContactEmail: '',
    companyContactPhone: '',
    notes: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      companyName,
      position,
      location,
      dateApplied,
      applicationId,
      applicationURL,
      applicationStatus,
      priorityLevel,
      companyContactName,
      companyContactEmail,
      companyContactPhone,
      notes
    } = this.state;

    const applicationInfo = {
      companyName,
      position,
      location,
      dateApplied,
      applicationId,
      applicationURL,
      applicationStatus,
      priorityLevel,
      companyContactName,
      companyContactEmail,
      companyContactPhone,
      notes
    };

    console.log(applicationInfo);

    this.setState({
      companyName: '',
      position: '',
      location: '',
      dateApplied: new Date().toISOString().substr(0, 10),
      applicationId: '',
      applicationURL: '',
      applicationStatus: 'Application Sent',
      priorityLevel: 'Neutral',
      companyContactName: '',
      companyContactEmail: '',
      companyContactPhone: '',
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
      applicationStatus,
      priorityLevel,
      companyContactName,
      companyContactEmail,
      companyContactPhone,
      notes
    } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Application</h2>
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
            <label>Application Status</label>
            <select
              className="form-control"
              required
              name="applicationStatus"
              onChange={this.onChange}
              value={applicationStatus}
            >
              <option value="Application Sent">Application Sent</option>
              <option value="Phone Screen">Phone Screen</option>
              <option value="Technical Assessment">Technical Assessment</option>
              <option value="Behavioral Interview">Behavioral Interview</option>
              <option value="Final Rounds">Final Rounds</option>
              <option value="Graveyeard">Graveyeard</option>
            </select>
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
            <label>Company Contact Name</label>
            <input
              className="form-control"
              type="text"
              name="companyContactName"
              onChange={this.onChange}
              value={companyContactName}
            />
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
            <label>Company Contact Phone</label>
            <input
              className="form-control"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="companyContactPhone"
              onChange={this.onChange}
              value={companyContactPhone}
            />
            <i>
              <small>Format: 123-456-6789</small>
            </i>
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
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
