import {createSelector} from 'reselect';
import {NameSpace} from "../main-reducer";

const getLocation = (locations, activeCity) => locations.filter((location) => location.name === activeCity)[0];

export const getActiveCity = (state) => state[NameSpace.CITIES].city;
export const getCities = (state) => state[NameSpace.CITIES].cities;
export const getCitiesLocations = (state) => state[NameSpace.CITIES].citiesLocations;

export const getActiveCityLocation = createSelector(
    getCitiesLocations,
    getActiveCity,
    (locations, activeCity) => getLocation(locations, activeCity)
);
