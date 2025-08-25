// Section 16: Quick Sort

// My attempt at creating the Pivot function of the Quick Sort algorithm

// So we need a swap function that we have built earlier in the course and will use to swap 2 elements in an array to switch their places in the array.
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [4, 8, 2, 1, 5, 7, 6, 3];
const array3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
// This is the original swap function. We will write a swap function in es6 syntax as well underneath it, they both do the same thing.
const swap = (arr, indx1, indx2) => {
  const temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
  return arr;
};
// console.log(swap(array1, 0, 8));

// This is the es6 form of the swap function
// const swapES6 = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

// Pivot Fn: Used to swap 2 indexes when the first index is greater then the second index
// const pivot = (arr, start = 0, end = arr.length - 1) => {
//   let swapIndx = start;
//   let pivot = arr[start];

//   for (let i = start + 1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       swapIndx++;
//       swap(arr, swapIndx, i);
//     }; 
//   };

//   console.log('Pivot Index: ', start, 'Swap Index: ', swapIndx);
//   console.log('Swap after Pivot Fn: ', swap(arr, start, swapIndx));
//   return swapIndx;
// };
// console.log(pivot(array2));


// Quick Sort Algorithm
// const quickSort = (arr, left = 0, right = arr.length - 1) => {
//   if (left < right) {
//     const pivotIdx = pivot(arr, left, right);
//     // left recursion
//     quickSort(arr, left, pivotIdx - 1);
//     // right recursion
//     quickSort(arr, pivotIdx + 1, right);
//   };

//   return arr;
// };

// console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

// Implementing Pivot Fn Helper and Quick Sort with comparator fn.
function strLengthComparator(a, b) {
  return a.length - b.length
};

const pivot = (arr, comparator, start = 0, end = arr.length - 1) => {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      return a - b;
    };
  };

  let swapIndx = start;
  let pivot = arr[start];

  for (let i = start + 1; i < arr.length; i++) {
    if (comparator(arr[i], pivot) < 0) {
      swapIndx++;
      swap(arr, swapIndx, i);
    }; 
  };

  console.log('Pivot Index: ', start, 'Swap Index: ', swapIndx);
  console.log('Swap after Pivot Fn: ', swap(arr, start, swapIndx));
  return swapIndx;
};

console.log(pivot(array3, strLengthComparator));
