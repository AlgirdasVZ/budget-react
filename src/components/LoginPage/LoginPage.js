import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { Redirect} from 'react-router-dom';

export class LoginPage extends Component {
  login = () => {
    this.props.startLogin();
  };

  render() {
    return this.props.isAuthenticated ? (
      <Redirect to="/dashboard"/>
    ) : (
      <div>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);