// ILocation 객체를 쉽게 생성해주는 함수 구현

import {ICoordinates} from "../coordinates";
import {ILocation} from "./ILocation";

export const makeILocation = (
    country: string,
    city: string,
    address: string,
    coordinates: ICoordinates
): ILocation => ({country, city, address, coordinates})
