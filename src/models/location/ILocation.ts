import {ICoordinates} from "../coordinates";

// country 만 필수 속성이고, 그 외엔 선택 속성
export type ILocation = {
    country: string,
    city?: string,
    address?: string,
    coordinates?: ICoordinates
}
