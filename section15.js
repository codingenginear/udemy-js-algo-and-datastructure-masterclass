// Section 15: Merge Sort

// My attempt at creating the merge function of the merge sort algorithm

const sortedArray1 = [1,4,5,8];
const sortedArray2 = [3,6,10,14];

const merge = (arr1, arr2) => {
  var mergedArray = [];
  var j = 0;

  for (let i = 0; i < sortedArray1.length; i++) {
    if (sortedArray1[i] < sortedArray2[j]) {
      mergedArray.push(sortedArray1[i]);
    }
    else if (sortedArray1[i] > sortedArray2[j]) {
      mergedArray.push(sortedArray2[j]);
      j++;
      i--;
    }
    if (i === sortedArray1.length - 1 && j !== sortedArray2.length - 1) {
      const slicedArray = sortedArray2.slice(j);
      mergedArray = mergedArray.concat(slicedArray);
    }
  }
  console.log(mergedArray);
}

merge(sortedArray1, sortedArray2);
