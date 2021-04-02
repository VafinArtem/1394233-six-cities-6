import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getReviews} from '../../store/review/selectors';
import ReviewForm from '../review-form/review-form';
import {REVIEW_PROP} from '../../utils/validate';
import {fetchComments} from '../../store/api-actions';
import ReviewList from '../reviews-list/review-list';

const Reviews = ({id, reviews, loadComments}) => {
  useEffect(() => {
    if (reviews[id] === undefined) {
      loadComments(id);
    }
  }, [reviews[id]]);

  return (
    <section className="property__reviews reviews">
      {reviews[id] === undefined ? <p>Loading...</p> : <ReviewList reviews={reviews[id]} />}
      <ReviewForm />
    </section>
  );
};

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
  reviews: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(REVIEW_PROP))).isRequired,
  loadComments: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(fetchComments(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
