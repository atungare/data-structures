var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0;
  this.storage = {};

};

Stack.prototype.push = function(val) {
  this.storage[this.len] = val;
  this.len++;
};

Stack.prototype.pop = function() {
  if(this.len > 0) {
    this.len--;
    var res = this.storage[this.len];
    delete this.storage[this.len];
    return res;
  }
};

Stack.prototype.size = function() {
  return this.len;
};

