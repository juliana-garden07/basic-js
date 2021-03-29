const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arrStr = [];
  if (!(typeof str === 'undefined')){

    let strAdd = '';
    if (!(typeof options.addition === 'undefined')){
        let arrAdd = [];
        if(Number.isInteger(options.additionRepeatTimes)){
          for (let j = 0; j < options.additionRepeatTimes; j++){
            arrAdd.push(`${options.addition}`);
          }
        } else if (typeof options.additionRepeatTimes === 'undefined'){
          arrAdd.push(`${options.addition}`);
        }
      if (typeof options.additionSeparator ==='undefined'){
        options.additionSeparator = '|';
      }
      strAdd = arrAdd.join(options.additionSeparator);
    }
    if (Number.isInteger(options.repeatTimes)){
      for (let i = 0; i < options.repeatTimes; i++){
        arrStr.push(`${str + strAdd}`);
      }
    } else if (typeof options.repeatTimes === 'undefined'){
      arrStr.push(`${str + strAdd}`)
    }


    if (typeof options.separator ==='undefined'){
      options.separator = '+';
    };


    return arrStr.join(options.separator);
  }
};
  