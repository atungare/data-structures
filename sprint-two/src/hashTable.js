var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  for(var i = 0; i < this._limit; i++){
    this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i).push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupArr = this._storage.get(i);
  for(var j = 0; j < tupArr.length; j++) {
    if(tupArr[j][0] === k){
      return tupArr[j][1];
    }
  }
  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupArr = this._storage.get(i);
  for(var j = 0; j < tupArr.length; j++) {
    if(tupArr[j][0] === k){
      tupArr = tupArr.splice(j, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
