
// Find index where the left and right side are equal
function findEqualIndex(arr)
{
  let lsum = 0;
  let rsum = 0;
  for(let i = 0; i < arr.length; i++) {
        if(arr[i-1]) lsum += arr[i-1]; 
        for(let j = i+1; j < arr.length; j++) rsum += arr[j];
        if(lsum === rsum) return i;
        rsum = 0;       
      }
      return -1;
}