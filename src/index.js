import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import mainReducer from './store/main-reducer';

const AMOUNT_CARDS = 5;

const store = configureStore({
  reducer: mainReducer,
});

ReactDOM.render(
    <Provider store={store}>
      <App
        cardsCount={AMOUNT_CARDS}
      />
    </Provider>,
    document.querySelector(`#root`)
);
