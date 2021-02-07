// Sorted by weight, weight is equal to sum of the number's digits.
// If two weights are equal than they are sorted by string.

function orderWeight(strng) {
    let arr = strng.split(' ');
    arr = arr.sort((a,b) => {
    const numA = a.split("").reduce((acc,curr) => Number(acc) + Number(curr))
    const numB = b.split("").reduce((acc,curr) => Number(acc) + Number(curr))
    if(numA - numB === 0) {
        if (a > b) return 1;
        if (a < b) return -1;
        else return 0;
      }
    return numA - numB;
    })
    return arr.join(" ")
}