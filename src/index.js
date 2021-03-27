import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const AMOUNT_CARDS = 5;

ReactDOM.render(
    <App
      cardsCount={AMOUNT_CARDS}
    />,
    document.querySelector(`#root`)
);
