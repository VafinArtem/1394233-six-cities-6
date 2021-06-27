import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import {OFFER_PROP} from '../../utils/validate';
import {capitalizeFirstLetter, getRatingWidth} from '../../utils/common';
import Reviews from '../reviews/reviews';
import {addFavorite, fetchNearbyOffers} from '../../store/api-actions';
import {getNearbyOffers} from '../../store/offers/selectors';
import Card from '../card/card';

const ImagesAmount = {
  MIN: 0,
  MAX: 6
};


const FullCard = ({offer, addFavoriteList, nearbyOffers, loadNearby}) => {
  const {images, title, isFavorite, isPremium, rating, type, bedrooms, maxAdults, price, goods, host, description, id} = offer;
  useEffect(() => {
    loadNearby(id);
  }, [id]);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(ImagesAmount.MIN, ImagesAmount.MAX).map((element, index) => <div className="property__image-wrapper" key={index + 1}>
                <img className="property__image" src={element} alt="Photo studio" />
              </div>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {!isPremium ? `` : <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`} type="button" onClick={() => {
                  addFavoriteList(id, Number(!isFavorite));
                }}>
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingWidth(rating)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalizeFirstLetter(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&lsquo;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((element, index) => <li className="property__inside-item" key={index + 1}>
                    {element}
                  </li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? `Pro` : ``}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews
                id={id}
              />
            </div>
          </div>
          <section className="property__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers !== undefined ? nearbyOffers.map((element) => <Card
                key={element.id}
                id={element.id}
                price={element.price}
                image={element.previewImage}
                title={element.title}
                isPremium={element.isPremium}
                rating={element.rating}
                isFavorite={element.isFavorite}
                type={element.type}
              />) : ``}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

FullCard.propTypes = {
  offer: PropTypes.shape(OFFER_PROP).isRequired,
  addFavoriteList: PropTypes.func.isRequired,
  nearbyOffers: PropTypes.arrayOf(PropTypes.shape(OFFER_PROP)),
  loadNearby: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  nearbyOffers: getNearbyOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  addFavoriteList(id, status) {
    dispatch(addFavorite(id, status));
  },
  loadNearby(id) {
    dispatch(fetchNearbyOffers(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FullCard);
