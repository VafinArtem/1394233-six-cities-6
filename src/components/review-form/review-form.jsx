import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {activeForm} from '../../store/action';
import {getActiveReviewFormStatus} from '../../store/review/selectors';
import RatingStar from '../rating-star/rating-star';

const ratings = [5, 4, 3, 2, 1];

const DEFAULT_RATING = 0;
const CommentLength = {
  MIN: 50,
  MAX: 300
};

const ReviewForm = ({activateForm, isActiveForm}) => {
  const [rating, setRating] = useState(DEFAULT_RATING);
  const [review, setReview] = useState(``);

  useEffect(() => {
    activateForm(review.length >= CommentLength.MIN && review.length <= CommentLength.MAX && rating !== DEFAULT_RATING);
  }, [review, rating]);

  return (
    <form className="reviews__form form" action="#" method="post" onChange={(evt) => {
      if (evt.target.name === `rating`) {
        setRating(parseInt(evt.target.value, 10));
      }
    }}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((element) => <RatingStar id={element} key={element} />)}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={``}
        onInput={(evt) => setReview(evt.target.value)} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isActiveForm ? `` : `disabled`}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  activateForm: PropTypes.func.isRequired,
  isActiveForm: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isActiveForm: getActiveReviewFormStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  activateForm(boolean) {
    dispatch(activeForm(boolean));
  }
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
