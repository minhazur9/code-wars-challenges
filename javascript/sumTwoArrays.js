
// Converts two arrays into two numbers, adds them together and converts back into an array
function addArrays(array1, array2) {
  const arrayToNumber1 = parseInt(array1.join(''));
  const arrayToNumber2 = parseInt(array2.join(''));
  let sum = 0;
  if (!arrayToNumber1 && !arrayToNumber2) return [];
  else if (!arrayToNumber1) sum = arrayToNumber2;
  else if (!arrayToNumber2) sum = arrayToNumber1;
  else sum = arrayToNumber1 + arrayToNumber2;
  const sumArr = sum.toString().split('');
  if(sumArr[0] == '-') sumArr.splice(0,2,sumArr[0]+sumArr[1])
  return sumArr.map((num) => parseInt(num))
}