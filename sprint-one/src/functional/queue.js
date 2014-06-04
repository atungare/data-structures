var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[last] = value;
    last++;
    size++;
  };

  someInstance.dequeue = function(){
    if (size > 0) {
      size--;
    }
    var res = storage[first];
    delete storage[first];
    first++;
    return res;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
