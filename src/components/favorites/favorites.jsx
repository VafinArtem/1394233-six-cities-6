import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FavoritesListEmpty from '../favorites-list-empty/favorites-list-empty';
import FavoritesList from '../favorites-list/favorites-list';
import Header from '../header/header';
import {getFavoriteOffers} from '../../store/offers/selectors';
import {Url} from '../../consts';
import {OFFER_PROP} from '../../utils/validate';

const Favorites = ({favorites}) => {
  return (
    <div className={`page ${favorites.length === 0 ? `page--favorites-empty` : ``}`}>
      <Header />
      <main className={`page__main page__main--favorites ${favorites.length === 0 ? `page__main--favorites-empty` : ``}`}>
        <div className="page__favorites-container container">
          {favorites.length > 0 ? <FavoritesList /> : <FavoritesListEmpty />}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={Url.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape(OFFER_PROP)),
};

const mapStateToProps = (state) => ({
  favorites: getFavoriteOffers(state),
});

export default connect(mapStateToProps)(Favorites);
