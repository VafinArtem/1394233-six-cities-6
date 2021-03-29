import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Url} from '../../consts';

const MAX_RATING = 5;

const capitalizeFirstLetter = ([first, ...rest]) => [first.toUpperCase(), ...rest].join(``);

const Card = ({price, image, title, isPremium, isFavorite, type, rating}) => {
  return (
    <article className="cities__place-card place-card">
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={Url.CARD}>
          <img className="place-card__image" src={image} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€${price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating / MAX_RATING * 100}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={Url.CARD}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Card;
