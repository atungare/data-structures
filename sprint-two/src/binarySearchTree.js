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

/*
 * Complexity: What is the time complexity of the above functions?
 */
