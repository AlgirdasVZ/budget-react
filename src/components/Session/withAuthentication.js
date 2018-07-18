import React from 'react';
import { connect } from 'react-redux';
import { firebase } from '../../firebase/firebase';
import { login, logout } from '../../actions/auth';
import { startSetExpenses } from '../../actions/expenses';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { login, logout, startSetExpenses } = this.props;

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          login(user.uid);
          startSetExpenses();
        } else {
          logout();
        }
      });
    }

    render() {
      return (
        <Component/>
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    login: (uid) => dispatch(login(uid)),
    logout: () => dispatch(logout()),
    startSetExpenses: () => dispatch(startSetExpenses())
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
