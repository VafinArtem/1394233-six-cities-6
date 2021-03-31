import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getActiveCity} from '../../store/cities/selectors';
import {getOffersWithCity} from '../../store/offers/selectors';
import Cities from '../cities/cities';
import Header from '../header/header';
import LocationsTabs from '../locations-tabs/locations-tabs';
import NotFoundOffers from '../not-found-offers/not-found-offers';

const Main = ({offersAmount, activeCity}) => {
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
};

const mapStateToProps = (state) => ({
  offersAmount: getOffersWithCity(state).length,
  activeCity: getActiveCity(state)
});

export default connect(mapStateToProps)(Main);
