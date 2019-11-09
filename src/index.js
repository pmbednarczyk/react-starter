import 'regenerator-runtime/runtime'
import 'theme/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import rootSaga from 'sagas/index.js'

import { createClientStore, sagaMiddleware } from './redux/store';
import App from './containers/App';

const store = createClientStore();
sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <ReduxProvider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
  </ReduxProvider>,
  document.getElementById('root'),
);

