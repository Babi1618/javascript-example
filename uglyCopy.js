//
//https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true

// const k = [4];
// const d = [5];
// const b = 5;

// function getMoneySpent(key, drives, b) {
//   console.log("key", key, "drives", drives, "b", b);
//   const res = key.map((el) => {
//     const reduce = drives.reduce((acc, next) => {
//       console.log("el", el, "next", next);
//       if (el + next < b) {
//         acc = el + next;
//       }
//       return acc;
//     }, -1);
//     return reduce;
//   });
//   const result = res.reduce((acc, next) => (acc > next ? acc : next), -1);
//   return result;
// }

// console.log(getMoneySpent(k, d, b));

// MAGIC SQUARE 16.00
//https://www.hackerrank.com/challenges/magic-square-forming/problem?isFullScreen=true
const prova = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
];

const res = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];
const diagonal1 = [4, 5, 5];
const diagonal2 = [2, 5, 8];
const row1 = [4, 3, 8];
const row2 = [9, 5, 1];
const row3 = [2, 7, 5];

function formingMagicSquare(s) {
  // Write your code here
  console.log(...s);
  const array = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
    [4, 5, 5],
    [2, 5, 8],
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 5],
  ];
  const prova = array.map((el) => {
    const pr = el.reduce((acc, next) => acc + next);
    return pr;
  });

  return prova;
}

console.log(formingMagicSquare(prova));


console.log(typeof null ==="null")