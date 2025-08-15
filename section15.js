// Section 15: Merge Sort

// My attempt at creating the merge function of the merge sort algorithm

// First array set with array 1 being larger
const sortedArray1 = [1, 4, 5, 8, 11, 20];
const sortedArray2 = [3, 6, 10, 14];
// Second array set with array 2 being larger
const sortedArray3 = [1, 4, 5, 8, 15];
const sortedArray4 = [3, 6, 10, 14, 19, 20];

// const mergeFor = (arr1, arr2) => {
//   var mergedArray = [];
//   var j = 0;
//   for (let i = 0; i < arr1.length && j < arr2.length; i++) {
//     if (arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i]);
//     }
//     else if (arr1[i] > arr2[j]) {
//       mergedArray.push(arr2[j]);
//       j++;
//       i--;
//     }
//     if (i === arr1.length - 1) {
//       const slicedArray = arr2.slice(j);
//       mergedArray = mergedArray.concat(slicedArray);
//       console.log("sliced Array 2");
//     }
//     else if (j === arr2.length) {
//       const slicedArray = arr1.slice(i + 1);
//       mergedArray = mergedArray.concat(slicedArray);
//       console.log("sliced Array 1");
//     };
//   }
//   console.log('For Loop Implementation: ', mergedArray);
//   return mergedArray;
// }
// mergeFor(sortedArray3, sortedArray4);





// Tutorial Implementation
// Section 15: Merging Arrays function: Implementation 
// Video: 89
// Merges two already sorted arrays
// function mergeWhile(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     console.log('While Loop implementation: ', results);
//     return results;
// }
// mergeWhile([100,200], [1,2,3,5,6])




// Tutorial Merge Sort Algorithm

// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  console.log('Midpoint: ', mid);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  console.log('Left: ', left, 'Right: ', right);
  return merge(left, right);
};

console.log(mergeSort([10, 24, 76, 73]));
// console.log(mergeSort([5, 50, 20, 25, 31, 18, 200]));

