import * as R from 'ramda';
// import {makeLens, getter, setter, setterUsingFunc} from './lens'
import {IPerson, makeRandomIPerson} from '../models/person'

// 참고 자료
// https://assu10.github.io/dev/2021/09/30/typescript-ramda-library-2/
// https://github.com/assu10/typescript/tree/main/chap09/src

// https://ramdajs.com/docs/#lens
// 선택적 깊은 복사
// props 와 assoc의 조합으로 만들수 있음

export const makeLens = (propName: string) => 
  R.lens(R.prop(propName), R.assoc(propName)) 

/*
  R.lens 함수로 객체의 특정 속성에 대한 렌즈를 만듦
  렌즈를 R.view 함수에 적용하여 속성값을 얻음
  렌즈를 R.set 함수에 적용하여 속성값이 바뀐 새로운 객체을 얻음
  렌즈와 속성값을 바꾸는 함수!!를 R.over 함수에 적용하여 값이 바뀐 새로운 객체를 얻음
*/
export const getter = (lens) => R.view(lens) 
export const setter = (lens) => <T>(newValue: T) => R.set(lens, newValue)
export const setterUsingFunc = (lens) => <T, R>(func: (arg0: T) => R) => R.over(lens, func)

// 활용
const nameLens = makeLens('location')('city');
console.log('nameLens', nameLens);  // [Function (anonymous)]

const getName = getter(nameLens);
console.log('getName', getName);   // [Function: f1]

const setName = setter(nameLens);
console.log('nameLens', nameLens);  // [Function (anonymous)]

const setNameUsingFunc = setterUsingFunc(nameLens);
console.log('setNameUsingFunc', setNameUsingFunc);  // [Function (anonymous)]

const person: IPerson = makeRandomIPerson();
console.log('person', person);

const name = getName(person);
console.log('name', name);  // Ina White

const newPerson = setName('assu')(person);
console.log('newPerson', newPerson);

const anotherPerson = setNameUsingFunc(name => `Miss ${name}`)(person);
console.log('anotherPerson', anotherPerson);
/*
anotherPerson {
    name: 'Miss Lura Cole',
        age: 56,
        title: 'EEO Compliance Manager',
        location: {
        country: 'LK',
            city: 'Mutubrew',
            address: '966 Boge Grove',
            coordinates: { latitude: 29.59275, longitude: -19.68588 }
    }
}
*/

const capitalPerson = setNameUsingFunc(R.toUpper)(person);
console.log('capitalPerson', capitalPerson);
/*
capitalPerson {
    name: 'LIDA OWEN',
        age: 35,
        title: 'Manpower Planner',
        location: {
        country: 'TN',
            city: 'Ekapuvzo',
            address: '1286 Zoklah Court',
            coordinates: { latitude: 28.94433, longitude: 177.0845 }
    }
}
*/

console.log(
    name, getName(newPerson), getName(anotherPerson), getName(capitalPerson)
)