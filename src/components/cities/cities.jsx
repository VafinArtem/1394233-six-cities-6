import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getActiveCity, getActiveCityLocation} from '../../store/cities/selectors';
import {getOfferLocations, getOffersWithCity} from '../../store/offers/selectors';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import {CITY_LOCATION_PROP, OFFERS_LOCATION_PROP} from '../../utils/validate';
import SortingForm from '../sorting-form/sorting-form';

const Cities = ({activeCity, offersAmount, cityLocation, points}) => {
  const [activeOffer, setActiveOffer] = useState(null);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersAmount} places to stay in {activeCity}</b>
          <SortingForm />
          <OffersList
            setActiveOffer={setActiveOffer}
          />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              city={cityLocation}
              points={points}
              activeOffer={activeOffer}
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
  points: PropTypes.arrayOf(PropTypes.shape(OFFERS_LOCATION_PROP).isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
  offersAmount: getOffersWithCity(state).length,
  cityLocation: getActiveCityLocation(state),
  points: getOfferLocations(state)
});

export {Cities};
export default connect(mapStateToProps)(Cities);
