// https://velog.io/@nakta/FP-in-JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%A0%91%ED%95%B4%EB%B3%B4%EB%8A%94-%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-IO-Future
// 실습 해보기
import { LocalStorage } from 'node-localstorage';
import { IO } from 'ramda-fantasy';

const localStorage = new LocalStorage('./scratch');

const getStorageIO = (key: string) => {
  return IO(() => localStorage.getItem(key));
};
const setStorage = (key: string, val: string) => {
  localStorage.setItem(key, val);
}

setStorage('tutorial', 'ready');

console.log(getStorageIO('tutorial')); // ready

setStorage('tutorial', 'complete');

// console.log(); // complte

console.log(getStorageIO('tutorial').runIO()); // complete