import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { appTheme } from './theme/globalStyle';
import { ThemeProvider } from 'styled-components';
// import '../firebase/firebase';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
