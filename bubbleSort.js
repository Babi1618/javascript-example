const array = [1, 3, 6, 2, 4];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log("prova")
    for (let j = 0; j < arr.length - i - 1; j++) {
    console.log("prova2")

      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort(array));
