#include <iostream>
#include <cctype>


std::string nextLetter(std::string str)
{
    std::string newString = "";
    for (char &character : str) {
        {
            if(isalpha(character) && isalpha(character+1)) {
                newString += char(character + 1);
            }
            else if(character == 90 || character == 122) {
                newString += char(character - 25);
            }
            else {
                newString += character;
            }
            
        }
    }
    
    return newString;
}