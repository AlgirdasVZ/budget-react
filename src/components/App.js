import React from 'react';
import 'react-dates/initialize';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseDashboardPage from './ExpenseDashboardPage/ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage/AddExpensePage';
import EditExpensePage from './EditExpensePage/EditExpensePage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import LoginPage from './LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import withAuthentication from './Session/withAuthentication';

const App = (props) => (
  <div>
    {props.status === 'loading' ? (
      <h1>loading</h1>
    ) : (
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
    )}
  </div>
);

const mapStateToProps = (state) => ({
  status: state.status
});

export default withAuthentication(connect(mapStateToProps)(App));