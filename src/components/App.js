import React, { Component } from 'react';
import 'react-dates/initialize';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../theme/globalStyle';
import ExpenseDashboardPage from './ExpenseDashboardPage/ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage/AddExpensePage';
import EditExpensePage from './EditExpensePage/EditExpensePage';
import HelpPage from './HelpPage/HelpPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Header from './Header/Header';
import configureStore from '../store/configureStore';
import {addExpense} from '../actions/expenses';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
          <BrowserRouter>
            <div>
              <Header/>

              <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;