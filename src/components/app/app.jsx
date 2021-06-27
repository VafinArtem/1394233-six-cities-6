import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import Favorites from '../favorites/favorites';
import FullCard from '../full-card/full-card';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {getLoadedOffer, getOffers} from '../../store/offers/selectors';
import {Url} from '../../consts';
import {OFFER_PROP} from '../../utils/validate';
import {fetchOffer} from '../../store/api-actions';

const App = ({offers, loadedOffer, loadOffer}) => {
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
        const id = +match.params.id;
        if (offers.length !== 0) {
          return <FullCard
            offer={offers[id - 1]}
          />;
        }

        if (!loadedOffer || loadedOffer.id !== id) {
          loadOffer(id);
          return <p>Loading...</p>;
        }
        return <FullCard
          offer={loadedOffer}
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
  loadOffer: PropTypes.func.isRequired,
  loadedOffer: PropTypes.shape(OFFER_PROP),
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  loadedOffer: getLoadedOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOffer(id) {
    dispatch(fetchOffer(id));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
