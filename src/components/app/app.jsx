import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import Favorites from '../favorites/favorites';
import FullCard from '../full-card/full-card';
import NotFound from '../sign-in-screen/sign-in-screen';
import {Url} from '../../consts';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Url.MAIN}>
          <Main />
        </Route>
        <Route exact path={Url.SIGN_IN}>
          <SignInScreen />
        </Route>
        <Route exact path={Url.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={Url.CARD}>
          <FullCard />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
