var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  for(var i = 0; i < this._limit; i++){
    this._storage.set(i, []);
  }
  this._count = 0;
  this._over = false;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i).push([k, v]);
  this._count++;
  if (this._count > (3/4) * this._limit) {
    this.rehash(2);
  }
  if (this._count > (1/4) * this._limit) {
    this._over = true;
  }
};

HashTable.prototype.rehash = function (doubleOrHalf) {
  this._count = 0;
  this._over = false;
  this._limit *= doubleOrHalf;
  var copy = this._storage;
  this._storage = makeLimitedArray(this._limit);

  for(var i = 0; i < this._limit; i++){
    this._storage.set(i, []);
  }
  var thisHash = this;
  copy.each(function(tupArr) {
    _.each(tupArr, function(tup) {
      thisHash.insert(tup[0], tup[1]);
    });
  });
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
  this._count--;

  if (this._over && (this._count < (1/4) * this._limit)) {
    debugger;
    this.rehash(0.5);
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
