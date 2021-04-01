import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getActiveCity, getActiveCityLocation} from '../../store/cities/selectors';
import {getOfferLocations, getOffersWithCity} from '../../store/offers/selectors';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import {CITY_LOCATION_PROP, OFFERS_LOCATION_PROP} from '../../utils/validate';

const Cities = ({activeCity, offersAmount, cityLocation, points}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersAmount} places to stay in {activeCity}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <OffersList />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              city={cityLocation}
              points={points}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

Cities.propTypes = {
  activeCity: PropTypes.string.isRequired,
  offersAmount: PropTypes.number.isRequired,
  cityLocation: PropTypes.shape(CITY_LOCATION_PROP).isRequired,
  points: PropTypes.arrayOf(PropTypes.shape(OFFERS_LOCATION_PROP).isRequired).isRequired
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
  offersAmount: getOffersWithCity(state).length,
  cityLocation: getActiveCityLocation(state),
  points: getOfferLocations(state)
});

export {Cities};
export default connect(mapStateToProps)(Cities);
