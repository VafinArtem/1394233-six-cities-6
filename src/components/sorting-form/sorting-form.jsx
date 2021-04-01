import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {SortTypeName} from '../../consts';
import {changeSort} from '../../store/action';
import {getSortingType} from '../../store/offers/selectors';

const SortingForm = ({sortType, changeActiveSort}) => {
  const [isOpenMenu, setMenuState] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => {
        setMenuState(!isOpenMenu);
      }}>
        {sortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenMenu ? `places__options--opened` : ``}`}>
        {SortTypeName.map((element, index) => <li
          className={`places__option ${sortType === element ? `places__option--active` : ``}`}
          tabIndex={0}
          key={index + 1}
          onClick={() => {
            changeActiveSort(element);
            setMenuState(!isOpenMenu);
          }}>
          {element}
        </li>)}
      </ul>
    </form>
  );
};

SortingForm.propTypes = {
  sortType: PropTypes.string.isRequired,
  changeActiveSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: getSortingType(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveSort(sortType) {
    dispatch(changeSort(sortType));
  }
});

export {SortingForm};
export default connect(mapStateToProps, mapDispatchToProps)(SortingForm);
