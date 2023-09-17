// chance 패키지를 이용하여 makeRandomICoordinates 함수 만듦

import {ICoordinates} from "./ICoordinates";
import {makeICoordinates} from "./makeICoordinates";
import Chance from 'chance'

const c = new Chance;

export const makeRandomICoordinates = (): ICoordinates =>
    makeICoordinates(c.latitude(), c.longitude());
