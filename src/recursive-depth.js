const CustomError = require("../extensions/custom-error");

class DepthCalculator {
  depthLocal = 0;
  depthMax = 0;

  calculateDepth(arr) {
    function R(arr){
      if (Array.isArray(arr)){
        this.depthLocal++;
        for (let i = 0; i < arr.length; i++){
          
          if (Array.isArray(arr[i])){
            R.call(this, arr[i]);
            
          if (this.depthLocal > this.depthMax)
              this.depthMax = this.depthLocal;
            
            this.depthLocal--;
          }
        }
        if (this.depthLocal > this.depthMax)
          this.depthMax = this.depthLocal;
      
      } else {
        throw new Error(`arr in not array`);
      }
    };

    R.call(this, arr);
    let result = this.depthMax;
    this.depthMax = 0;
    this.depthLocal = 0;
    return result;
  };
}

module.exports = DepthCalculator;