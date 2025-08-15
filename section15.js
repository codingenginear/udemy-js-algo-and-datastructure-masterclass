// Section 15: Merge Sort

// My attempt at creating the merge function of the merge sort algorithm

// First array set with array 1 being larger
const sortedArray1 = [1, 4, 5, 8, 11, 20];
const sortedArray2 = [3, 6, 10, 14];

// Second array set with array 2 being larger
const sortedArray3 = [1, 4, 5, 8, 15];
const sortedArray4 = [3, 6, 10, 14, 19, 20];

const merge = (arr1, arr2) => {
  var mergedArray = [];
  var j = 0;

  for (let i = 0; i < arr1.length && j < arr2.length; i++) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
    }
    else if (arr1[i] > arr2[j]) {
      mergedArray.push(arr2[j]);
      j++;
      i--;
    }

    if (i === arr1.length - 1) {
      const slicedArray = arr2.slice(j);
      mergedArray = mergedArray.concat(slicedArray);
      console.log("sliced Array 2");
    }
    else if (j === arr2.length) {
      const slicedArray = arr1.slice(i + 1);
      mergedArray = mergedArray.concat(slicedArray);
      console.log("sliced Array 1");
    };
  }

  console.log(mergedArray);
  return mergedArray;
}

merge(sortedArray3, sortedArray4);
