import {SortingDecryption, SortType} from "../consts";

const getFilteredOffers = (offers, city) => offers.filter((offer) => offer.city.name === city);

const filter = {
  [SortType.POPULAR]: (offers) => offers,
  [SortType.PRICE_TO_HIGH]: (offers) => offers.sort((a, b) => a.price - b.price),
  [SortType.PRICE_TO_LOW]: (offers) => offers.sort((a, b) => b.price - a.price),
  [SortType.TOP_RATED]: (offers) => offers.sort((a, b) => b.rating - a.rating),
};

export const getFilteredLocationOffers = (offers, city) => {
  const points = [];
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  filteredOffers.forEach((element) => points.push({
    id: element.id,
    title: element.title,
    location: element.location
  }));
  return points;
};

export const getSortingOffers = (offers, city, sortType) => filter[SortingDecryption.get(sortType)](getFilteredOffers(offers, city));
