
// Convert a 10 digit number into phone number format
function createPhoneNumber(numbers){
    let numString = '(';
    for(let i = 1; i <= 10; i++) {
        numString += numbers[i-1];
        if(i == 3) numString +=') ';
        if(i % 6 == 0) numString +='-';
    }
    return numString;
  }