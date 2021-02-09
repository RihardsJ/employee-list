const merge = (left, right) => {
  let sortedList = [];

  while (left.length && right.length) {
    if (left[0].name.toLowerCase() < right[0].name.toLowerCase()) {
      sortedList.push(left.shift());
    } else {
      sortedList.push(right.shift());
    }
  }

  return [...sortedList, ...left, ...right];
};

const AscendingMergeSort = (array) => {
  if (array.length < 2) return array;
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  return merge(AscendingMergeSort(left), AscendingMergeSort(right));
};

export default AscendingMergeSort;
