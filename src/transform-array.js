const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let localArr = [...arr];
  if (!Array.isArray(localArr)) {
    throw new Error('arr is not an array');
  } else {
    let newArr = [];
    for (let i = 0; i < localArr.length; i++){
      switch (localArr[i]){
        case `--discard-next`: 
          if (i < localArr.length - 1){
            localArr.splice(i, 2);
          };
          break;
        case `--discard-prev`:
          if(i > 0){
            newArr.pop();
          }
          break;
        case `--double-next`:
          if(i < localArr.length - 1){
            newArr.push(localArr[i + 1]);
          };
          break;
        case `--double-prev`:
          if(i > 0){
            newArr.push(localArr[i - 1]);
          }
          break;
        default: 
          newArr.push(localArr[i]);
          break;
      }
    }
    return newArr;
  }
};
