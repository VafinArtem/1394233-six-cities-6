import React from 'react';
import {Link} from 'react-router-dom';
import {Url} from '../../consts';

const NotFound = () => {
  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">404 Not Found</h1>
        <Link to={Url.MAIN}>Return to Main</Link>
      </section>
    </div>
  );
};

export default NotFound;
