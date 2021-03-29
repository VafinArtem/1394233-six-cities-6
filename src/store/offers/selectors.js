import {NameSpace} from "../main-reducer";

export const getOffers = (state) => state[NameSpace.OFFERS].offers;
