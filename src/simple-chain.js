const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  finishChainStr: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!(typeof value === 'undefined')){
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push(`(  )`);
    }
    return this;
  },
  removeLink(position){
    if(Number.isInteger(position) && position > 0 && position < this.chain.length){
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error('positin is not correct');
    }
  },
  reverseChain() {
    let NewChain = [];
    for (let i = this.chain.length; i > 0; i--){
      NewChain.push(this.chain[i - 1]);
    }
    this.chain = NewChain;
    return this;
  },
  finishChain() {
    this.finishChainStr = this.chain.join('~~');
    this.chain = [];
    return this.finishChainStr;
  }
};

module.exports = chainMaker;
