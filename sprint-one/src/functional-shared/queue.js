var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQ = {_len: 0, _first: 0, _last: 0, _storage: {}};
  return _.extend(newQ, queueMethods);
};

var queueMethods = {
  enqueue: function(val) {
    this._storage[this._last] = val;
    this._len++;
    this._last++;
  },
  dequeue: function() {
    if (this._len > 0) {
      this._len--;
      var res = this._storage[this._first];
      delete this._storage[this._first];
      this._first++;
      return res;
    }
  },
  size: function() {
    return this._len;
  }
};



