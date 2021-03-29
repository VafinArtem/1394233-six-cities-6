import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCities} from '../../store/cities/selectors';
import LocationTab from '../location-tab/location-tab';

const LocationsTabs = ({cities}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((element, index) => <LocationTab key={index + 1} location={element} />)}
        </ul>
      </section>
    </div>
  );
};

LocationsTabs.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
});

export {LocationsTabs};
export default connect(mapStateToProps)(LocationsTabs);
