import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import mainReducer from './store/main-reducer';

const store = configureStore({
  reducer: mainReducer,
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
