import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCities} from '../../store/cities/selectors';
import {getFavoriteOffers} from '../../store/offers/selectors';
import FavoritesLocation from '../favorites-location/favorites-location';
import {OFFER_PROP} from '../../utils/validate';

const FavoritesList = ({favorites, cities}) => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city, index) => {
          const offers = favorites.filter((offer) => offer.city.name === city);
          if (offers.length > 0) {
            return <FavoritesLocation
              key={index + 1}
              location={city}
              offers={offers}
            />;
          }
          return ``;
        })}
      </ul>
    </section>
  );
};

FavoritesList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape(OFFER_PROP).isRequired),
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  favorites: getFavoriteOffers(state),
  cities: getCities(state)
});

export default connect(mapStateToProps)(FavoritesList);
