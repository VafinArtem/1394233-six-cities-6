import {NameSpace} from "../main-reducer";

export const getAuthorizationStatus = (state) => state[NameSpace.AUTH].authorizationStatus;
export const getAvatar = (state) => state[NameSpace.AUTH].avatar;
export const getEmail = (state) => state[NameSpace.AUTH].email;
