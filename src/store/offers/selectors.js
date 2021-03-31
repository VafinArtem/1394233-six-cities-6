import {createSelector} from 'reselect';
import {getActiveCity} from '../cities/selectors';
import {NameSpace} from "../main-reducer";

const getFilteredOffers = (offers, city) => offers.filter((offer) => offer.city.name === city);

export const getOffers = (state) => state[NameSpace.OFFERS].offers;

export const getOffersWithCity = createSelector(
    getOffers,
    getActiveCity,
    (films, genre) => getFilteredOffers(films, genre)
);
