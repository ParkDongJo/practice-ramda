// ICoordinates 객체를 쉽게 만들어주는 역할

import {ICoordinates} from "./ICoordinates";

export const makeICoordinates = (latitude: number, longitude: number): ICoordinates =>
    ({latitude, longitude});
