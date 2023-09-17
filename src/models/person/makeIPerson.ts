import {ILocation} from "../location";

export const makeIPerson = (
    name: string,
    age: number,
    title?: string,
    location?: ILocation
) => ({name, age, title, location});
