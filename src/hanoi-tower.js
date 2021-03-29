const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  let minNumOfTurns = Math.pow(2, disksNumber) - 1;
  let minNumOfSeconds = Math.floor(minNumOfTurns / turnsSpeed * 3600);

  let Hanoi = {
    turns: minNumOfTurns,
    seconds: minNumOfSeconds
  }
  return Hanoi;
};
