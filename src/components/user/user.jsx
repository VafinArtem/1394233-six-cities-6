import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../store/api-actions';
import {getEmail} from '../../store/auth/selectors';

const User = ({userLogout, email}) => {
  return (
    <a className="header__nav-link header__nav-link--profile" href="#" onClick={(evt) => {
      evt.preventDefault();
    }}>
      <div className="header__avatar-wrapper user__avatar-wrapper" onClick={(evt) => {
        evt.preventDefault();
        userLogout();
      }}>
      </div>
      <span className="header__user-name user__name">{email}</span>
    </a>
  );
};

User.propTypes = {
  userLogout: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  email: getEmail(state)
});

const mapDispatchToProps = (dispatch) => ({
  userLogout() {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
