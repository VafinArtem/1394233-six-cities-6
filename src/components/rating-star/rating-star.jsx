import React from 'react';
import PropTypes from 'prop-types';

const RatingTitle = {
  1: `terribly`,
  2: `badly`,
  3: `not bad`,
  4: `good`,
  5: `perfect`
};

const RatingStar = ({id}) => {
  return (
    <React.Fragment>
      <input className="form__rating-input visually-hidden" name="rating" defaultValue={id} id={`${id}-stars`} type="radio" />
      <label htmlFor={`${id}-stars`} className="reviews__rating-label form__rating-label" title={RatingTitle[id]}>
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </React.Fragment>
  );
};

RatingStar.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RatingStar;
