var makeBinarySearchTree = function(value){
  var bst = Object.create(bstMethods);
  bst.right = null;
  bst.left = null;
  bst.value = value;
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(val) {
  var newBST = makeBinarySearchTree(val);
  if(val < this.value) {
    if(this.left) {
      this.left.insert(val);
    } else {
      this.left = newBST;
    }
  } else {
    if(this.right) {
      this.right.insert(val);
    } else {
      this.right = newBST;
    }
  }
};

bstMethods.contains = function(val) {
  var found = (this.value === val);
  if (val < this.value) {
    if(this.left) {
      found = this.left.contains(val);
    }
  } else if (val > this.value) {
    if(this.right) {
      found = this.right.contains(val);
    }
  }
  return found;
};

bstMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
  if(this.left) {
    this.left.depthFirstLog(callback);
  }
};

bstMethods.breadthFirstLog = function(callback) {

  var nodes = new Queue();

  nodes.enqueue(this);

  var runCB = function(node){
    callback(node.value);
    if(node.left) {
      nodes.enqueue(node.left);
    }
    if(node.right) {
      nodes.enqueue(node.right);
    }
  };

  while(nodes.size() > 0) {
    runCB(nodes.dequeue());
  }


  // storageQ
  //
  // enQ this
  //
  // deQ(this)
  //
  // deQ(node)
    // callback(node)
    // if this.left exists
      // push it to storageQ --> enq(this.left)
    // if this.right exists
      // push it to storageQ


















  // grandpa
  // current parent count  (index of the current parent)
  // current grandpaCount (index of current grandparent)
  // parent breadth = # of parents
  // iterate over children of current parent
    // callback on child
  // if parent count < parent breadth
    // parent count ++
    // bfl(callback, grandparent, grandparent.children[parentCount])
  // if parent count = parent breadth (going down a level)
    // current parent count = 0
    // iterate over ___
      // grandpaCount++
      // bfl(callback, grandparent.children[parentCount], grandparent.children[parentCount])
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
