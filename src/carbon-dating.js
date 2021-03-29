const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  // var AmountOfCycles = 0;
  // var newActivity = sampleActivity;
  // var i;

  // while(newActivity < 15) {
  //   newActivity *= newActivity * 1.5;
  // }
  if (typeof sampleActivity === 'string' && 
    typeof Number(sampleActivity) === 'number' && 
    0 < sampleActivity && 
    sampleActivity <= 15 && 
    sampleActivity !== undefined)
  {
      return Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/(0.693/HALF_LIFE_PERIOD));
  } else {
    return false;
  }
};
