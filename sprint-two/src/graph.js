var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var keys = Object.keys(this.nodes);
  this.nodes[newNode] = {};
  if (toNode) {
    this.addEdge(newNode, toNode);
  }

  if (keys.length === 1) {
    this.addEdge(newNode, keys[0]);
  }
};

Graph.prototype.contains = function(node){
  if (this.nodes[node]) {
    return true;
  }else{
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this.nodes[fromNode][toNode] === true) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];

  if (Object.keys(this.nodes[fromNode]).length === 0) {
    delete this.nodes[fromNode];
  }

  if (Object.keys(this.nodes[toNode]).length === 0) {
    delete this.nodes[toNode];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
