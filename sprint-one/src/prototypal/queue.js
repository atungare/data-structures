var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQ = Object.create(queueMethods);
  newQ.len = 0;
  newQ.first = 0;
  newQ.last = 0;
  newQ.storage = {};
  return newQ;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.last] = val;
  this.last++;
  this.len++;
};
queueMethods.dequeue = function() {
  if (this.len > 0) {
    this.len--;
    var res = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return res;
  }
};
queueMethods.size = function() {
  return this.len;
};
