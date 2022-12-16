var BinarySearchTree = function(value) {
  var bstMethods = Object.create(BinarySearchTree.prototype);
  bstMethods.left = null;
  bstMethods.right = null;
  bstMethods.value = value;

  return bstMethods;
};

BinarySearchTree.prototype.insert = function (value) {
  if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.value > value && this.left !== null) {
    return this.left.contains(value);
  } else if (this.value < value && this.right !== null) {
    return this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
