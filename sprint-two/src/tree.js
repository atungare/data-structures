var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var newNode = makeTree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target){
  var found = (this.value === target);

  _.each(this.children, function(child){
    found = found || child.contains(target);
  });

  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
