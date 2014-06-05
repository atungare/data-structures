var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  for(var i = 0; i < this._limit; i++){
    this._storage.set(i, {});
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i)[k] = v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i)[k] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
