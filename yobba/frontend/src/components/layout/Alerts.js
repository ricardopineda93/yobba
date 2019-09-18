import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';

class Alerts extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.username)
        alert.error(`Username: ${error.msg.username.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
    }

    if (message !== prevProps.message) {
      if (message.addStatusList) alert.success(message.addStatusList);
      if (message.addApplication) alert.success(message.addApplication);
      if (message.passwordsNotMatch) alert.error(message.passwordsNotMatch);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapState = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapState)(withAlert()(Alerts));
