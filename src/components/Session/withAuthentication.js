import React from 'react';
import { connect } from 'react-redux';
import { firebase } from '../../firebase/firebase';
import { login, logout } from '../../actions/auth';
import { startSetExpenses } from '../../actions/expenses';
import { setLoading, setLoaded } from '../../actions/status';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { login, logout, startSetExpenses, setLoading, setLoaded } = this.props;
      setLoading();
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          login(user.uid);
          startSetExpenses().then(() => {
            setLoaded();
          });
        } else {
          logout();
          setLoaded();
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
    startSetExpenses: () => dispatch(startSetExpenses()),
    setLoading: () => dispatch(setLoading()),
    setLoaded: () => dispatch(setLoaded())
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
