import React from 'react';
import PropTypes from 'prop-types';
import FavoriteCard from '../favorite-card/favorite-card';
import {OFFER_PROP} from '../../utils/validate';

const FavoritesLocation = ({location, offers}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((element) => <FavoriteCard
          key={element.id}
          price={element.price}
          image={element.previewImage}
          title={element.title}
          isFavorite={element.isFavorite}
          id={element.id}
        />)}
      </div>
    </li>
  );
};

FavoritesLocation.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OFFER_PROP).isRequired).isRequired,
  location: PropTypes.string.isRequired,
};

export default FavoritesLocation;
