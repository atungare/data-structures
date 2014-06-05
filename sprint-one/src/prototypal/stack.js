
var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.len] = val;
  this.len++;
};

stackMethods.pop = function() {
  if (this.len > 0) {
    this.len--;
    var res = this.storage[this.len];
    delete this.storage[this.len];
    return res;
  }

};

stackMethods.size = function() {
  return this.len;
};

var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newS = Object.create(stackMethods);
  newS.len = 0;
  newS.storage = {};
  return newS;
};
