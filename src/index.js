import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from './browser-history';
import App from './components/app/app';
import {AuthorizationStatus} from './consts';
import {createAPI} from './services/api';
import {authorization} from './store/action';
import {checkLogin} from './store/api-actions';
import mainReducer from './store/main-reducer';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
    () => store.dispatch(authorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkLogin());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
