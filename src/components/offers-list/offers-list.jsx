import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getOffersWithCity} from '../../store/offers/selectors';
import Card from '../card/card';
import {OFFER_PROP} from '../../utils/validate';

const OffersList = ({offers, setActiveOffer}) => {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map(({id, price, previewImage, title, isPremium, rating, isFavorite, type}) => {
        return <Card
          key={id}
          id={id}
          price={price}
          image={previewImage}
          title={title}
          isPremium={isPremium}
          rating={rating}
          isFavorite={isFavorite}
          type={type}
          setActiveOffer={setActiveOffer}
        />;
      })}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OFFER_PROP).isRequired),
  setActiveOffer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: getOffersWithCity(state)
});

export {OffersList};
export default connect(mapStateToProps)(OffersList);
