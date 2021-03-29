import {combineReducers} from 'redux';
import {cities} from './cities/cities';
import {offers} from './offers/offers';


export const NameSpace = {
  CITIES: `CITIES`,
  OFFERS: `OFFERS`
};

export default combineReducers({
  [NameSpace.CITIES]: cities,
  [NameSpace.OFFERS]: offers
});
