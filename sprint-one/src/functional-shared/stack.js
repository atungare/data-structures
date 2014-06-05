var stackMethods = {
  push : function(val) {
    this._storage[this._len] = val;
    this._len++;
  },
  pop : function() {
    if (this._len > 0) {
      this._len--;
      var res = this._storage[this._len];
      delete this._storage[this._len];
      return res;
    }

  },
  size : function() {
    return this._len;
  }
};

var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = _.extend({_len:0, _storage:{}}, stackMethods);
  return obj;
};
