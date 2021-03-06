
// Decode morse code to english
decodeMorse = function(morseCode){
    const text = ['SOS', 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0',' ', '.', ',', '?', '!', '"', "'", ':','-'];

    const morse = ['...---...', '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.','-----','','.-.-.-','--..--', '..--..', '-.-.--', '.-..-.', '.----.', '---...','-....-'];

    let morseArr = morseCode.split(' ');
    for(let i = 0; i < morseArr.length; i++ ) {
        index = morse.indexOf(morseArr[i]);
        morseArr[i] = text[index];  
    }
    let translation = morseArr.join('').replace(/[^\S\r\n]{2,}/g," ").trim();
    return translation;
}