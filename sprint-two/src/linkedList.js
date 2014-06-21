var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);

    if(list.tail) {
      list.tail.next = newNode;
      newNode.previous = list.tail;
    } else {
      list.head = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function(){
    if(list.head) {
      var res = list.head.value;
      list.head = list.head.next;
      if(list.head) {
        list.head.previous = null;
      }
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

  list.addToHead = function(value) {
    var newNode = makeNode(value);
    if(list.head) {
      list.head.previous = newNode;
      newNode.next = list.head;
    } else {
      list.tail = newNode;
    }
    list.head = newNode;
  };

  list.removeTail = function() {
    if(list.tail) {
      var res = list.tail.value;
      list.tail = list.tail.previous;
      if(list.tail) {
        list.tail.next = null;
      }
      return res;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
