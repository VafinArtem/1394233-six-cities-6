import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {capitalizeFirstLetter, getRatingWidth} from '../../utils/common';
import {addFavorite} from '../../store/api-actions';
import browserHistory from '../../browser-history';
import {Url} from '../../consts';

const Card = ({price, image, title, isPremium, isFavorite, type, rating, id, setActiveOffer, addFavoriteList}) => {
  return (
    <article className={`${browserHistory.location.pathname === Url.MAIN ? `cities__place-card` : `near-places__card`} place-card`} onMouseEnter={() => {
      if (browserHistory.location.pathname === Url.MAIN) {
        setActiveOffer(id);
      }
    }} onMouseLeave={() => {
      if (browserHistory.location.pathname === Url.MAIN) {
        setActiveOffer(null);
      }
    }}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={image} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€${price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button" onClick={() => {
            addFavoriteList(id, Number(!isFavorite));
          }}>
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingWidth(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  setActiveOffer: PropTypes.func.isRequired,
  addFavoriteList: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addFavoriteList(id, status) {
    dispatch(addFavorite(id, status));
  },
});

export default connect(null, mapDispatchToProps)(Card);
