import {combineReducers} from 'redux';
import {cities} from './cities/cities';
import {offers} from './offers/offers';
import {auth} from './auth/auth';
import {review} from './review/review';


export const NameSpace = {
  CITIES: `CITIES`,
  OFFERS: `OFFERS`,
  AUTH: `AUTH`,
  REVIEW: `REVIEW`
};

export default combineReducers({
  [NameSpace.CITIES]: cities,
  [NameSpace.OFFERS]: offers,
  [NameSpace.AUTH]: auth,
  [NameSpace.REVIEW]: review
});
