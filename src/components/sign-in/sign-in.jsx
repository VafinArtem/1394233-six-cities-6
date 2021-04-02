import React from 'react';
import {Link} from 'react-router-dom';
import {Url} from '../../consts';

const SignIn = () => {
  return (
    <Link className="header__nav-link header__nav-link--profile" to={Url.SIGN_IN}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>
  );
};

export default SignIn;
