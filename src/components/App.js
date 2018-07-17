import React, { Component } from 'react';
import 'react-dates/initialize';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../theme/globalStyle';
import ExpenseDashboardPage from './ExpenseDashboardPage/ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage/AddExpensePage';
import EditExpensePage from './EditExpensePage/EditExpensePage';
import HelpPage from './HelpPage/HelpPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import configureStore from '../store/configureStore';
// import '../firebase/firebase';
import { startSetExpenses } from '../actions/expenses';
import LoginPage from './LoginPage/LoginPage';
import { firebase } from '../firebase/firebase';
import createHistory from 'history/createBrowserHistory';
import { login, logout } from '../actions/auth';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const history = createHistory();

const store = configureStore();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses());
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    history.push('/');
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
          <Router history={history}>
            <div>
              <Switch>
                <Route path="/" component={LoginPage} exact />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <PrivateRoute path="/help" component={HelpPage} />
                <PrivateRoute component={NotFoundPage} />
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;