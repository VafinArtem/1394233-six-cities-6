import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../store/api-actions';
import {getEmail} from '../../store/auth/selectors';
import {Link} from 'react-router-dom';
import {Url} from '../../consts';

const User = ({userLogout, email}) => {
  return (
    <Link to={Url.FAVORITES} className="header__nav-link header__nav-link--profile" onClick={(evt) => {
      if (evt.target.classList.contains(`user__avatar-wrapper`)) {
        evt.preventDefault();
        userLogout();
      }
    }}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">{email}</span>
    </Link>
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
