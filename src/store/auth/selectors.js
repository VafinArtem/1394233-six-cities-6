import {NameSpace} from "../main-reducer";

export const getAuthorizatonStatus = (state) => state[NameSpace.AUTH].authorizationStatus;
