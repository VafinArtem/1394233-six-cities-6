import React from 'react';
import {connect} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AuthorizationStatus, Url} from '../../consts';
import {getAuthorizatonStatus} from '../../store/auth/selectors';
import SignIn from '../sign-in/sign-in';
import User from '../user/user';

const Header = ({authorization}) => {
  const history = useHistory();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {history.location.pathname === Url.MAIN ?
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a> :
              <Link to={Url.MAIN} className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            }
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorization === AuthorizationStatus.AUTH ? <User /> : <SignIn />}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorization: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorization: getAuthorizatonStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
