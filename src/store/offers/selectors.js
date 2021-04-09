import {createSelector} from 'reselect';
import {getFilteredLocationOffers, getSortingOffers} from '../../utils/filter';
import {getActiveCity} from '../cities/selectors';
import {NameSpace} from "../main-reducer";

export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getSortingType = (state) => state[NameSpace.OFFERS].sortType;
export const getFavoriteOffers = (state) => state[NameSpace.OFFERS].favorites;
export const getLoadedOffer = (state) => state[NameSpace.OFFERS].loadedOffer;


export const getOffersWithCity = createSelector(
    getOffers,
    getActiveCity,
    getSortingType,
    (offers, city, sortType) => getSortingOffers(offers, city, sortType)
);

export const getOfferLocations = createSelector(
    getOffers,
    getActiveCity,
    (offers, city) => getFilteredLocationOffers(offers, city)
);
