const getSubArray = (arr, numberOfElements) => {
  let copyarr = arr.slice().subarray(0, 1);
  return copyarr; 
};

getSubArray([11, 4, 8, 3], 2);
