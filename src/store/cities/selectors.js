import {NameSpace} from "../main-reducer";

export const getActiveCity = (state) => state[NameSpace.CITIES].city;
export const getCities = (state) => state[NameSpace.CITIES].cities;
