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


BinarySearchTree.prototype.breadthFirstLog = function () {
  var queue = [];
  if (this.left) {
    queue.push(this.left);
  }
  if (this.right) {
    queue.push(this.right);
  }
  if (this.value !== undefined) {
    console.log(this.value);
  }
  while (queue.length > 0) {
    var current = queue.shift();
    if (current.value !== undefined) {
      console.log(current.value);
    }
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
};

BinarySearchTree.prototype.rebalance = function(memo) {
  var result = [];
  var output = memo || 0;
  output += 1;
  if (this.left && this.right) {
    result = result.concat(this.left.rebalance(output));
    result = result.concat(this.right.rebalance(output));
  } else if (this.left && !this.right) {
    result = result.concat(this.left.rebalance(output));
  } else if (this.right && !this.left) {
    result = result.concat(this.right.rebalance(output));
  } else {
    return [output];
  }
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
