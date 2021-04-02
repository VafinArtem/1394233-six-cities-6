import {MAX_RATING} from "../consts";

export const capitalizeFirstLetter = ([first, ...rest]) => [first.toUpperCase(), ...rest].join(``);

export const getRatingWidth = (rating) => rating / MAX_RATING * 100;
