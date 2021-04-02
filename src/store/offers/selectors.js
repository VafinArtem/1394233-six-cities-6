import {createSelector} from 'reselect';
import {SortingDecryption, SortType} from '../../consts';
import {getActiveCity} from '../cities/selectors';
import {NameSpace} from "../main-reducer";

const getFilteredOffers = (offers, city) => offers.filter((offer) => offer.city.name === city);

const getFilteredLocationOffers = (offers, city) => {
  const points = [];
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  filteredOffers.forEach((element) => points.push({
    id: element.id,
    title: element.title,
    location: element.location
  }));
  return points;
};

const filter = {
  [SortType.POPULAR]: (offers) => offers,
  [SortType.PRICE_TO_HIGH]: (offers) => offers.sort((a, b) => a.price - b.price),
  [SortType.PRICE_TO_LOW]: (offers) => offers.sort((a, b) => b.price - a.price),
  [SortType.TOP_RATED]: (offers) => offers.sort((a, b) => b.rating - a.rating),
};

const getSortingOffers = (offers, city, sortType) => filter[SortingDecryption.get(sortType)](getFilteredOffers(offers, city));

export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getSortingType = (state) => state[NameSpace.OFFERS].sortType;

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
