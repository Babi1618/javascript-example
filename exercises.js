//2.1
function simpleArraySum4(ar) {
  return ar.reduce((acc, next) => acc + next);
}

// 2.2 Reduce using string

const reduceString = (string) => {
  const s = string.split("").reduce((start, finish) => finish + start);
  return s;
};

//3.1
function compareTriplets(a, b) {
  let aRes = 0;
  let bRes = 0;
  a.forEach((el, i) => {
    if (el > b[i]) aRes++;
    else if (el < b[i]) bRes++;
  });
  return [aRes, bRes];
}

//3.2: Reduce

function compareTripletsReduce(alice, bob) {
  let aliceResult = 0;
  let bobResult = 0;
  for (let i = 0; i < 3; i++) {
    if (alice[i] !== bob[i]) {
      [alice[i], bob[i]].reduce((acc, next) => acc - next > 0)
        ? aliceResult++
        : bobResult++;
    }
  }
  return [aliceResult, bobResult];
}

//3.3
function compareTripletsReduce2(alice, bob) {
  return [alice, bob].reduce((acc, next) => {
    let aliceResult = 0;
    let bobResult = 0;
    for (let i = 0; i < acc.length; i++) {
      if (acc[i] !== next[i]) {
        acc[i] > next[i] ? aliceResult++ : bobResult++;
      }
    }
    return [aliceResult, bobResult];
  });
}

//4
function aVeryBigSum(ar) {
  let sum = 0;
  ar.map((el) => (sum = sum + el));
  return sum;
}

//5 - Diagonal differences (1ora e un quarto)
// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
const matrix3 = [
  [-1, 2, -3],
  [4, -5, 6],
  [-9, 8, -99],
];
const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [99, 8, 9],
];
const matrix = [
  [-1, 1, -7, -8],
  [-10, -8, -5, -2],
  [0, 9, 7, -1],
  [4, 4, -2, 1],
];

function diagonalDifference(arr) {
  const diagonal1 = [];
  const diagonal2 = [];
  for (let i = 0; i < arr.length; i++) {
    diagonal1.push(arr[i][i]);
    diagonal2.push(arr[i][arr.length - 1 - i]);
  }
  return Math.abs(
    diagonal1.reduce((acc, next) => acc + next) -
      diagonal2.reduce((acc, next) => acc + next)
  );
}

//6: plus minus.
//25 minuti circa..
//https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
const array = [1, -2, -7, 9, 1, -8, -5];

const divideValues = (numerator, denominator) => {
  return (numerator / denominator).toFixed(6);
};
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  arr.forEach((el) => {
    el === 0 ? zero++ : el > 0 ? positive++ : negative++;
  });

  console.log(divideValues(positive, arr.length));
  console.log(divideValues(negative, arr.length));
  console.log(divideValues(zero, arr.length));
}

//7 Staircase
//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
//circa 40 minuti
const staircase = (n) => {
  for (let i = 1; i < n + 1; i++) {
    let hashtags = new Array(i).fill("#");
    let result = [...Array(n - i).fill(" "), ...hashtags];
    console.log(result.join(""));
  }
};

//9
//https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
// 35 minuti: una soluzione he eccede limiti di tempo

function birthdayCakeCandles(candles) {
  const maxCandle = candles.reduce((acc, next) => (acc > next ? acc : next), 0);
  const res = candles.filter((el) => el === maxCandle);
  return res.length;
}

//10 -The Conversion
//https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
//circa 25 minuti
function timeConversion(s) {
  let result = "";
  const partOfDay = s
    .split("")
    .filter((el) => el == "A" || el === "M" || el === "P")
    .join("");
  let hours = `${s.split("")[0]}${s.split("")[1]}`;
  const minutesAndSeconds = `${s.split("")[3]}${s.split("")[4]}:${
    s.split("")[6]
  }${s.split("")[7]}`;
  if (hours === "12") {
    if (partOfDay === "PM") {
      result = `${hours}:${minutesAndSeconds}`;
    }
    if (partOfDay === "AM") {
      result = `00:${minutesAndSeconds}`;
    }
  } else {
    if (partOfDay === "PM") {
      hours = (Number(hours) + 12).toString();
      if (hours.length === 1) {
        hours = `0${hours}`;
      }
      result = `${hours}:${minutesAndSeconds}`;
    }
    if (partOfDay === "AM") {
      result = `${hours}:${minutesAndSeconds}`;
    }
  }
  return result;
}

//11 min/max
//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
//circa 45 minuti

function sum(ar, data) {
  let result = 0;
  ar.forEach((el) => (result += el));
  return result - data;
}

function miniMaxSum(arr) {
  const max = arr.reduce((acc, next) => (acc >= next ? acc : next), 0);
  const min = arr.reduce((acc, next) => (acc <= next ? acc : next), arr[0]);
  console.log(`${sum([...arr], max)} ${sum([...arr.filter((el) => el)], min)}`);
}

//12 - GRADING STUDENT
//https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
const rounding = (gr) => {
  if (gr >= 38 && gr % 5 > 2) {
    return gr % 5 === 3 ? gr + 2 : gr + 1;
  }
  return gr;
};

function gradingStudents(grades) {
  const res = grades.map(rounding);
  return res;
}

//13 BREAKING THE RECORDS
//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
// 35 minuti
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const scores2 = [10];
const scores3 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

let min = 0;
let max = 0;

const getMin = (acc, next, index, array) => {
  if (next > acc) min++;
  if (index === array.length - 1) return min;
  return acc > next ? acc : next;
};

const getMax = (acc, next, index, array) => {
  if (next < acc) max++;
  if (index === array.length - 1) return max;
  return acc < next ? acc : next;
};

function breakingRecords(scores) {
  return scores.length > 1
    ? [
        scores.reduce((acc, next, index, array) =>
          getMin(acc, next, index, array)
        ),
        scores.reduce((acc, next, index, array) =>
          getMax(acc, next, index, array)
        ),
      ]
    : [0, 0];
}

//14 Birthday bar
// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
// circa 40 minuti

const sum = (ar) => {
  let result = 0;
  ar.forEach((el) => (result += el));
  return result;
};

function birthday(s, d, m) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(s.slice(i, i + m));
    if (sum(s.slice(i, i + m)) === d) {
      res++;
    }
  }
  return res;
}

// 15 Kangaroo
// 1h ora circa
// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

function arraySum(ar) {
  return ar.reduce((acc, next) => acc + next);
}
const compare = (x1, v1, x2, v2) => {
  const sum1 = arraySum([x1, v1]);
  const sum2 = arraySum([x2, v2]);
  return sum1 === sum2
    ? "YES"
    : sum1 < sum2
    ? compare(sum1, v1, sum2, v2)
    : "NO";
};

function kangaroo(x1, v1, x2, v2) {
  return v1 <= v2 ? "NO" : compare(x1, v1, x2, v2);
}

//MIO!!! contare elementi in un array che soddisfano un requisito
const arrayProva = [1, 1, 2, 3, 3, 3, 4, 5, 3, 2, 2];

const countElement = (arr) => {
  const myReduce = arr.reduce((acc, next) => {
    if (next === 3) {
      acc = acc + 1;
    }
    return acc;
  }, 0);

  return myReduce;
};

//16 Bon Appetit
// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
// 25 minuti

const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;

const countTotalBill = (acc, next, index, k) => {
  return index === k ? acc : acc + next;
};

function bonAppetit(bill, k, b) {
  const totalBill = bill.reduce((acc, next, index) =>
    countTotalBill(acc, next, index, k)
  );
  console.log(b - totalBill / 2 === 0 ? "Bon Appetit" : b - totalBill / 2);
}

// console.log(bonAppetit(bill, k, b));

// 17: birds
// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
// circa un'ora

const arr = [1, 4, 4, 4, 5, 3, 3, 1];

function migratoryBirds(arr) {
  const object = arr.reduce((acc, next) => {
    if (!acc[`${next}`]) {
      acc[`${next}`] = 1;
    } else {
      acc[`${next}`] = acc[`${next}`] + 1;
    }
    return acc;
  }, {});
  const res = { key: "", value: 0 };
  for (const [key, value] of Object.entries(object)) {
    if (res.value < value) {
      res.key = key;
      res.value = value;
    }
  }
  return Number(res.key);
}

// console.log(migratoryBirds(arr));

// 18 Apple and orange
// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
// 25 minuti

const app = [2, 3, -4];
const or = [3, -2, -4];

const countFruit = (array, init, s, t) => {
  const res = array.reduce((acc, next) => {
    if (next + init >= s && next + init <= t) acc++;
    return acc;
  }, 0);
  return res;
};

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(countFruit(apples, a, s, t));
  console.log(countFruit(oranges, b, s, t));
}

// 19
// https://www.hackerrank.com/challenges/arrays-ds/problem?isFullScreen=true
// 15 minuti

function reverseArray(a) {
  const reverse = a.map((el, index, array) => {
    return array[array.length - index - 1];
  });
  return reverse;
}

console.log(reverseArray(array));

//20 Day of programmer
//https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true
// circa un'ora e dieci

const date = 2013;

const getDay = (year) => {
  if (year < 1918) {
    if (year % 4 === 0) return 12;
    return 13;
  } else if (year === 1918) return 26;
  else {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return 12;
    return 13;
  }
};
function dayOfProgrammer(year) {
  return `${getDay(year)}.09.${year}`;
}

// 21 Socks
// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true
// 20 minuti

function sockMerchant(n, ar) {
  const obj = ar.reduce((acc, next) => {
    if (!acc[next]) acc[next] = 1;
    else acc[next]++;
    return acc;
  }, {});
  let res = 0;
  for (const [key, value] of Object.entries(obj)) {
    res = res + Math.floor(value / 2);
  }
  return res;
}

//22 count Pages
//https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true
//mezz'ora

const n = 6;
const p = 2;
const countPages = (n, p) => {
  if (n % 2 === 0) return Math.abs(Math.floor((p - n) / 2));
  return Math.abs(Math.floor((p - n + 1) / 2));
};

function pageCount(n, p) {
  return n - p > p - 1 ? countPages(1, p) : countPages(n, p);
}

console.log(pageCount(n, p));

//23 counting valley
//https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
// 20 minuti

const path = "DDUUDDUDUUUD";
function countingValleys(steps, path) {
  const countValley = path.split("").reduce(
    (acc, next) => {
      if (acc.num === 0 && next === "D")
        return { num: acc.num - 1, total: acc.total + 1 };
      return { num: acc.num + (next === "U" ? 1 : -1), total: acc.total };
    },
    { num: 0, total: 0 }
  );
  return countValley.total;
}

// 24
// https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
//dieci minuti

const strings = ["aba", "baba", "aba", "xzxb"];
const queries = ["aba", "xzxb", "ab"];

function matchingStrings(strings, queries) {
  const res = queries.map((el) => strings.filter((e) => e === el).length);
  return res;
}

console.log(matchingStrings(strings, queries));
//25
//https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
// 5 minuti 
// const arr = [1, 2, 10, 10, 3, 1, 2, 3, 4];
function lonelyinteger(a) {
  const obj = a.reduce((acc, next) => {
    if (!acc[next]) acc[next] = 1;
    else acc[next]++;
    return acc;
  }, {});
  for (const [k, v] of Object.entries(obj)) {
    if (v === 1) return k;
  }
}

//26 - Ricorsione
// const array = [9, 15, 18, 19, 30];
const x = 31;

const find = (x, arr) => {
  if (arr.length > 0) {
    let middle = arr[Math.ceil(arr.length / 2) - 1];
    console.log("array", arr, "x", x, "middle", middle);
    if (x === middle) {
      return true;
    }
    return x < middle
      ? find(x, arr.slice(0, Math.ceil(arr.length / 2) - 1))
      : find(x, arr.slice(Math.ceil(arr.length / 2)));
  }
  return false;
};

// console.log(find(x, array));

