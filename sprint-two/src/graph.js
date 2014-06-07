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
  return (this.nodes[node] !== undefined);
};

Graph.prototype.removeNode = function(node){
  if(this.nodes[node]) {
    _.each(this.nodes[node], function(val, key) {
      delete this.nodes[key][node];
    });
    delete this.nodes[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return (this.nodes[fromNode][toNode] === true);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];

  if (_.isEmpty(this.nodes[fromNode])) {
    delete this.nodes[fromNode];
  }
  if (_.isEmpty(this.nodes[toNode])) {
    delete this.nodes[toNode];
  }
};

Graph.prototype.forEachNode = function(callback) {
  _.each(this.nodes, callback);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
