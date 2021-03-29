import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeCity} from '../../store/action';
import {getActiveCity} from '../../store/cities/selectors';

const LocationTab = ({location, activeCity, changeActiveCity}) => {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${location === activeCity ? `tabs__item--active` : ``}`} href="#" onClick={() => {
        changeActiveCity(location);
      }}>
        <span>{location}</span>
      </a>
    </li>
  );
};

LocationTab.propTypes = {
  location: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  changeActiveCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCity(city) {
    dispatch(changeCity(city));
  }
});

export {LocationTab};
export default connect(mapStateToProps, mapDispatchToProps)(LocationTab);
