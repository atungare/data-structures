var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);

    if(list.tail) {
      list.tail.next = newNode;
    } else {
      list.head = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function(){
    if(list.head) {
      var res = list.head.value;
      list.head = list.head.next;
      return res;
    }
  };

  list.contains = function(target){
    var found = (list.head.value === target);

    var current = list.head;

    while((current !== list.tail) && !found) {
      current = current.next;
      found = (current.value === target);
    }

    return found;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
