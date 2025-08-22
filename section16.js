// Section 16: Quick Sort

// My attempt at creating the Pivot function of the Quick Sort algorithm

// So we need a swap function that we have built earlier in the course and will use to swap 2 elements in an array to switch their places in the array.
const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// This is the original swap function. We will write a swap function in es6 syntax as well underneath it, they both do the same thing.
const swap = (arr, indx1, indx2) => {
  const temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
  return arr;
};

console.log(swap(array1, 0, 2));

const pivot = (arr, start = 0, end = arr.length - 1) => {

};