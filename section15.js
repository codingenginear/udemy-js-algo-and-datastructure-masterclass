// Section 15: Merge Sort

// My attempt at creating the merge function of the merge sort algorithm

const sortedArray1 = [1, 4, 5, 8, 11, 20];
const sortedArray2 = [3, 6, 10, 14];

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

    if (i === arr1.length) {
      const slicedArray = arr2.slice(j);
      mergedArray = mergedArray.concat(slicedArray);
      console.log("sliced Array 1");
    }
    else if (j === arr2.length) {
      const slicedArray = arr1.slice(i);
      mergedArray = mergedArray.concat(slicedArray);
      console.log("sliced Array 1");
    };
  }
  console.log(mergedArray);
}

merge(sortedArray1, sortedArray2);
