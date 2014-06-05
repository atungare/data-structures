var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0;
  this.first = 0;
  this.last = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.len++;
  this.last++;
};

Queue.prototype.dequeue = function() {
  if (this.len > 0) {
    this.len--;
    var res = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return res;
  }
};

Queue.prototype.size = function() {
  return this.len;
};
