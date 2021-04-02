import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {getRatingWidth} from '../../utils/common';
import {REVIEW_PROP} from '../../utils/validate';

const Review = ({review}) => {
  const {user: {avatarUrl, name}, comment, rating, date} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingWidth(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format(`YYYY-MM-D`)}>{dayjs(date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape(REVIEW_PROP).isRequired,
};

export default Review;
