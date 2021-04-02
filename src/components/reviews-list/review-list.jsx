import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Review from '../review/review';
import {REVIEW_PROP} from '../../utils/validate';

const ReviewList = ({reviews}) => {
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.slice().sort((a, b) => dayjs(a.date) - dayjs(b.date)).map((element) => <Review review={element} key={element.id} />)}
      </ul>
    </React.Fragment>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(REVIEW_PROP)).isRequired,
};

export default ReviewList;
