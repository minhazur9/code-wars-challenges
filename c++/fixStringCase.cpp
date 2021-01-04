#include <iostream>
#include <string>
#include <ctype.h>

// Convert whole string to upper or lower based on the majority, all lower case if even
std::string solve(const std::string& str){
   int upperCount = 0;
   std::string newStr = "";
   int size = str.length();
   int halfSize = size/2;
  for(int i = 0; i < size; i++) {
      if(isupper(str[i])) upperCount++;
  }
  if (upperCount > halfSize) {
    for(int i = 0; i < size; i++) newStr+=std::toupper(str[i]);
    
  }
  else {
    for(int i = 0; i < size; i++) newStr+=std::tolower(str[i]);
      
  }
  return newStr;
}