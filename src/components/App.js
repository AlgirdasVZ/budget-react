import React, { Component } from 'react';
import 'react-dates/initialize';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from './ExpenseDashboardPage/ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage/AddExpensePage';
import EditExpensePage from './EditExpensePage/EditExpensePage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import LoginPage from './LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import withAuthentication from './Session/withAuthentication';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={LoginPage} exact />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log('aa');
//     store.dispatch(login(user.uid));
//     store.dispatch(startSetExpenses());
//     if (history.location.pathname === '/') {
//       history.push('/dashboard');
//     }
//   } else {
//     console.log('ss');
//     store.dispatch(logout());
//     history.push('/');
//   }
// });

export default withAuthentication(App);