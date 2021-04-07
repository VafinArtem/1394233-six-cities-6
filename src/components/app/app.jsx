import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import Favorites from '../favorites/favorites';
import FullCard from '../full-card/full-card';
import {getOffers} from '../../store/offers/selectors';
import {Url} from '../../consts';
import {OFFER_PROP} from '../../utils/validate';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

const App = ({offers}) => {
  return (
    <Switch>
      <Route exact path={Url.MAIN}>
        <Main />
      </Route>
      <Route exact path={Url.SIGN_IN}>
        <SignInScreen />
      </Route>
      <PrivateRoute exact
        path={Url.FAVORITES}
        render={() => <Favorites />}
      />
      <Route exact path={Url.OFFER} render={({match}) => {
        const id = match.params.id;
        return <FullCard
          offer={offers[id - 1]}
        />;
      }} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OFFER_PROP).isRequired),
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
});

export {App};
export default connect(mapStateToProps)(App);
