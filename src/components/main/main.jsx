import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getActiveCity} from '../../store/cities/selectors';
import {getOffers, getOffersWithCity} from '../../store/offers/selectors';
import Cities from '../cities/cities';
import Header from '../header/header';
import LocationsTabs from '../locations-tabs/locations-tabs';
import NotFoundOffers from '../not-found-offers/not-found-offers';
import {fetchOffers} from '../../store/api-actions';
import {OFFER_PROP} from '../../utils/validate';

const Main = ({offersAmount, activeCity, loadOffers, offers}) => {
  useEffect(() => {
    if (offers.length === 0) {
      loadOffers();
    }
  }, [offers]);

  return (
    <div className={`page page--gray page--main ${offersAmount === 0 ? `page__main--index-empty` : ``}`}>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTabs />
        {offersAmount === 0 ? <NotFoundOffers city={activeCity} /> : <Cities />}
      </main>
    </div>
  );
};

Main.propTypes = {
  activeCity: PropTypes.string.isRequired,
  offersAmount: PropTypes.number.isRequired,
  loadOffers: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(OFFER_PROP)).isRequired
};

const mapStateToProps = (state) => ({
  offersAmount: getOffersWithCity(state).length,
  activeCity: getActiveCity(state),
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOffers() {
    dispatch(fetchOffers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
