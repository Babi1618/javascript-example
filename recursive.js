//Ricorsione
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