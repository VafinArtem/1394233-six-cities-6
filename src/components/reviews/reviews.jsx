import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import dayjs from 'dayjs';
import {getReviews} from '../../store/review/selectors';
import Review from '../review/review';
import {REVIEW_PROP} from '../../utils/validate';

const Reviews = ({id, reviews}) => {
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews[id].length}</span></h2>
      <ul className="reviews__list">
        {reviews[id].slice().sort((a, b) => dayjs(a.date) - dayjs(b.date)).map((element) => <Review review={element} key={element.id} />)}
      </ul>
    </React.Fragment>
  );
};

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
  reviews: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(REVIEW_PROP))).isRequired,
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state)
});

export default connect(mapStateToProps)(Reviews);
