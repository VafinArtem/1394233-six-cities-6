import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import Favorites from '../favorites/favorites';
import FullCard from '../full-card/full-card';

const App = ({cardsCount}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            cardsCount={cardsCount}
          />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <FullCard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default App;
