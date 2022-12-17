

// Instantiate a new graph
var Graph = function() {
  var graphMethods = Object.create(Graph.prototype);
  graphMethods.adjList = {};
  graphMethods.nodes = [];
  return graphMethods;
};

Graph.prototype = {};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.adjList[node] = [];
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.adjList[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.adjList[node];
  var index = this.nodes.indexOf(node);
  this.nodes.splice(index);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //check if fromNode and toNode exist
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return false;
  }

  //check if fromNode is the neighbour of toNode
  for (var i = 0; i < this.adjList[toNode].length; i++) {
    if (this.adjList[toNode][i] === fromNode) {
      return true;
    }
    // } else if (this.adjList[fromNode][i] === toNode) {
    //   return true;
    // }
    // Solution review note: return this.adjList[toNode].contains(fromNode)
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //check if fromNode and toNode exist and if they are already connected
  if (this.hasEdge(fromNode, toNode)) {
    return;
  }
  this.adjList[fromNode].push(toNode);
  this.adjList[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //check if edge exists
  if (!this.hasEdge(fromNode, toNode)) {
    return;
  }
  var index1 = this.adjList[fromNode].indexOf(toNode);
  this.adjList[fromNode].splice(index1);

  var index2 = this.adjList[toNode].indexOf(fromNode);
  this.adjList[toNode].splice(index2);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node of this.nodes) {
    cb(node);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


