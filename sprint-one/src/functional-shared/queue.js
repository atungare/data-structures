var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQ = {len: 0, first: 0, last: 0, storage: {}};
  return _.extend(newQ, queueMethods);
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.last] = val;
    this.len++;
    this.last++;
  },
  dequeue: function() {
    if (this.len > 0) {
      this.len--;
    }

    var res = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return res;
  },
  size: function() {
    return this.len;
  }
};



