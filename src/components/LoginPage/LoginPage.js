import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

export class LoginPage extends Component {
  login = () => {
    this.props.startLogin();
  };

  render() {
    return (
      <div>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);