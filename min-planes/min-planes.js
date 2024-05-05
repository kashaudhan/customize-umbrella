// js code for Minimum number  of planes required to reach end
function minPlanes(arr, n) {
  // planes[n-1] will hold the
  var planes = Array.from({ length: n }, (_, i) => 0);
  // result
  var i, j;

  // if first element is 0,
  if (n == 0 || arr[0] == 0) return Number.MAX_VALUE;
  // end cannot be reached

  planes[0] = 0;

  // Find the minimum number of planes to reach arr[i]
  // from arr[0], and assign this value to planes[i]
  for (i = 1; i < n; i++) {
    planes[i] = Number.MAX_VALUE;
    for (j = 0; j < i; j++) {
      if (i <= j + arr[j] && planes[j] != Number.MAX_VALUE) {
        planes[i] = Math.min(planes[i], planes[j] + 1);
        break;
      }
    }
  }
  return planes[n - 1];
}

// driver program to test above function
const arr1 = [2,1,2,3,1];
const arr2 = [1,6,3,4,5,0,0,0,6];

console.log(`${arr1} --> ${minPlanes(arr1, arr1.length)}`);
console.log(`${arr2} --> ${minPlanes(arr2, arr2.length)}`);
