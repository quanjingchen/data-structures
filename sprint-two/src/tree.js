var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.parent = null;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
  newTree.traverse = treeMethods.traverse;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.removeFromParent = function() {
  var pointer = this.parent.children.indexOf(this);
  this.parent.children.splice(pointer, 1);
  this.parent = null;
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target) === true) {
      return true;
    }
  }
  return false;
};

treeMethods.traverse = function(cb) {
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value !== undefined) {
      cb(this.children[i]);
    }
    this.children[i].traverse(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
