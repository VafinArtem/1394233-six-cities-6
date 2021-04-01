import {createSelector} from 'reselect';
import {getActiveCity} from '../cities/selectors';
import {NameSpace} from "../main-reducer";

const getFilteredOffers = (offers, city) => offers.filter((offer) => offer.city.name === city);
const getFilteredLocationOffers = (offers, city) => {
  const points = [];
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  filteredOffers.forEach((element) => points.push({
    title: element.title,
    location: element.location
  }));
  return points;
};

export const getOffers = (state) => state[NameSpace.OFFERS].offers;

export const getOffersWithCity = createSelector(
    getOffers,
    getActiveCity,
    (offers, city) => getFilteredOffers(offers, city)
);

export const getOfferLocations = createSelector(
    getOffers,
    getActiveCity,
    (offers, city) => getFilteredLocationOffers(offers, city)
);
