function* sumRange(input, acc = 0) {
	if (input === 1) {	
		yield acc;
	}
  if (input > 0) {
    yield* sumRange(input - 1, acc + input - 1);
  }
}

for (let i of sumRange(5)) {
  console.log(i);
}

// const sumRange = (input, acc = 0) => {
// 	if (input === 1) {
// 		return acc;
// 	}
// 	return sumRange(input - 1, acc + input - 1);
// }
// console.log(sumRange(5));
// console.time('first')
// console.log(memoSumRange(5))
// console.timeEnd('first')

// console.time('second')
// console.log(memoSumRange(6))
// console.timeEnd('second')