const words = [
  "bug",
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const sortedNumbers = [
  -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
];
const oddNumbers = [1, 3, 5, 9];
const evenNumbers = [2, 42, 104, 6, 8, 24];
//**FILTER**//

const filtered = words.filter((el) => el.length > 6);
// console.log(filtered);
const isBigEnough = (arr, value) => {
  return arr.filter((el) => el.length > value);
};
// console.log(isBigEnough(words, 4));

const isPositive = (arr) => {
  return arr.filter((el) => (el > 0 ? true : false));
};
// console.log(isPositive(sortedNumbers));

/*FIND */
const found = sortedNumbers.find((element) => element > 10);
// console.log(found)
const findFirstNumber = (arr) => {
  return arr.find((el) => el > 0);
};

// console.log(findFirstNumber(sortedNumbers))

/*SOME */
const isEven = (element) => element % 2 === 0;
const someMetodh = sortedNumbers.some(isEven);
// console.log(someMetodh);

/*CONCAT*/
const arr = [1, 2];
const arr2 = [3, 4];

arr.concat(arr2);

console.log(arr);

/*MAP */
sortedNumbers.map((el) => el * 2);
console.log(sortedNumbers);

/* PUSH */

// arr.push(4)
// console.log(arr)

/* SPLICE */

sortedNumbers.splice(8)
console.log(sortedNumbers)