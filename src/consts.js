export const Url = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  OFFER: `/offer/:id`,
  FAVORITES: `/favorites`
};

export const AuthorizationStatus = {
  AUTH: `Auth`,
  NO_AUTH: `NoAuth`
};

export const MAX_RATING = 5;

export const SortType = {
  POPULAR: `popular`,
  PRICE_TO_HIGH: `priceToHight`,
  PRICE_TO_LOW: `priceToLow`,
  TOP_RATED: `topRated`
};

export const SortingDecryption = new Map([
  [`Popular`, `popular`],
  [`Price: low to high`, `priceToHight`],
  [`Price: high to low`, `priceToLow`],
  [`Top rated first`, `topRated`]
]);

export const SORT_TYPE_DEFAULT = `Popular`;

export const sortTypeNames = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];
