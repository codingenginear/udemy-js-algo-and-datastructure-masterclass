// Section 16: Quick Sort

// My attempt at creating the Pivot function of the Quick Sort algorithm

// So we need a swap function that we have built earlier in the course and will use to swap 2 elements in an array to switch their places in the array.
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [4, 8, 2, 1, 5, 7, 6, 3];

// This is the original swap function. We will write a swap function in es6 syntax as well underneath it, they both do the same thing.
const swap = (arr, indx1, indx2) => {
  const temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
  return arr;
};
// console.log(swap(array1, 0, 8));

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let swapIndx = start;
  let pivot = arr[start];

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndx++;
      swap(arr, swapIndx, i);
    }; 
  };

  console.log('Pivot Index: ', start, 'Swap Index: ', swapIndx);
  swap(arr, start, swapIndx);
  return swapIndx;
};

console.log(pivot(array2));


