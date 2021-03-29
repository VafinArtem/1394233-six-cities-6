import {combineReducers} from 'redux';
import {cities} from './cities/cities';


export const NameSpace = {
  AUTH: `AUTH`,
  CITIES: `CITIES`,
};

export default combineReducers({
  [NameSpace.CITIES]: cities,
});
