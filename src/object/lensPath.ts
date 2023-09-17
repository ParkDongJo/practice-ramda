import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from "./model/person";

// 참고 자료
// https://assu10.github.io/dev/2021/09/30/typescript-ramda-library-2/
// https://github.com/assu10/typescript/tree/main/chap09/src

// https://ramdajs.com/docs/#lens
// 선택적 깊은 복사
// props 와 assoc의 조합으로 만들수 있음

const getter = (lens) => R.view(lens);
const setter = (lens) => <T>(newValue: T) => R.set(lens, newValue);
const setterUsingFunc = (lens) => <T, R>(func: (T) => R) => R.over(lens, func);

// 활용
const longitudeLens = R.lensPath(['location', 'coordinates', 'longitude']);  // 렌즈 생성
console.log('longitudeLens', longitudeLens);     // [Function (anonymous)]

const getLongitude = getter(longitudeLens);
console.log('getLongitude', getLongitude);      //  [Function: f1]

const setLongitude = setter(longitudeLens);
console.log('setLongitude', setLongitude);      // [Function (anonymous)]

const setLongitudeUsingFunc = setterUsingFunc(longitudeLens);
console.log('setLongitudeUsingFunc', setLongitudeUsingFunc);        // [Function (anonymous)]

const person: IPerson = makeRandomIPerson();

const longitude = getLongitude(person);
console.log('longitude', longitude);    // -88.99555

const newPerson = setLongitude(0.12345)(person);
console.log('newPerson', newPerson);
/*
newPerson {
    name: 'Charles Hudson',
        age: 63,
        title: 'Biotechnical Researcher',
        location: {
            country: 'UM',
            city: 'Tipedivot',
            address: '874 Wazvod Court',
            coordinates: { latitude: 2.4853, longitude: 0.12345 }
    }
}
*/

const anotherPerson = setLongitudeUsingFunc(R.add(0.12345))(person);
console.log('anotherPerson', anotherPerson);
/*
anotherPerson {
    name: 'Trevor Schultz',
        age: 57,
        title: 'Food & Beverage Director',
        location: {
        country: 'MC',
            city: 'Rarito',
            address: '484 Deha Square',
            coordinates: { latitude: -65.29564, longitude: 26.61039 }
    }
}
*/

console.log(
    longitude, getLongitude(newPerson), getLongitude(anotherPerson)
);
// 164.50159 0.12345 164.62503999999998