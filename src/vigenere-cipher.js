const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  encrypt(message, key) {
    let charCiphLetter = 0;
    let arrCiph = [];
    let iKey = 0;
    for(let i = 0; i < message.length; i++){
      let charMessLetter = message.toUpperCase().split('')[i].charCodeAt();
      let charKeyLetter = key.toUpperCase().split('')[iKey % key.length].charCodeAt();
      if((charMessLetter > 64 && charMessLetter < 91) ||
        (charMessLetter > 96 && charMessLetter < 123)){
          charCiphLetter = (charMessLetter - 65 + charKeyLetter - 65) % 26 + 65;
          arrCiph.push(String.fromCharCode(charCiphLetter));
          iKey++;
      } else {
        arrCiph.push(String.fromCharCode(charMessLetter));
      }
    } 
    return arrCiph.join('');
  }    
  decrypt(cipher, key) {
    let charMessLetter = 0;
    let arrMess = [];
    let iKey = 0;
    for(let i = 0; i < cipher.length; i++){
      let charCiphLetter = cipher.split('')[i].charCodeAt();
      let charKeyLetter = key.toUpperCase().split('')[iKey % key.length].charCodeAt();
      if((charCiphLetter > 64 && charCiphLetter < 91)){
          charMessLetter = (charCiphLetter - 65 + 26 - (charKeyLetter - 65)) % 26 + 65;
          arrMess.push(String.fromCharCode(charMessLetter));
          iKey++;
      } else {
        arrMess.push(String.fromCharCode(charCiphLetter));
      }
    } 
    return arrMess.join('');
  }
}

module.exports = VigenereCipheringMachine;
