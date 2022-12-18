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
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  cb(this.value);
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.depthFirstLogPreorder = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLogPreorder(cb);
  }
  if (this.right) {
    this.right.depthFirstLogPreorder(cb);
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
    console.log('bfs logger: ', this.value);
  }
  while (queue.length > 0) {
    var current = queue.shift();
    if (current.value !== undefined) {
      console.log('bfs logger: ', current.value);
    }
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
};

BinarySearchTree.prototype.getLeafDepth = function(memo) {
  var result = [];
  var output = memo || 0;
  output += 1;
  if (this.left && this.right) {
    result = result.concat(this.left.getLeafDepth(output));
    result = result.concat(this.right.getLeafDepth(output));
  } else if (this.left && !this.right) {
    result = result.concat(this.left.getLeafDepth(output));
  } else if (this.right && !this.left) {
    result = result.concat(this.right.getLeafDepth(output));
  } else {
    return [output];
  }
  return result;
};

BinarySearchTree.prototype.rebalanceHelperIteration = function(values) {
  var mid = Math.floor((values.length - 1) / 2);
  this.value = values[mid];
  [this.left, this.right] = [null, null];
  var lvalues = values.slice(0, mid);
  var rvalues = values.slice(mid + 1, values.length);
  while (lvalues.length !== 0 && rvalues.length !== 0) {
    var lmid = Math.floor((lvalues.length - 1) / 2);
    var rmid = Math.floor((rvalues.length - 1) / 2);
    this.insert(lvalues[lmid]);
    this.insert(rvalues[rmid]);
    lvalues.splice(lmid, 1);
    rvalues.splice(rmid, 1);
  }
  if (lvalues.length !== 0 || rvalues.length !== 0) {
    var temp = lvalues.length !== 0 ? lvalues[0] : rvalues[0];
    this.insert(temp);
  }
};

BinarySearchTree.prototype.rebalanceHelper = function(values, start, end) {
  var mid = Math.floor((start + end) / 2);
  this.value = values[mid];
  this.left = null;
  this.right = null;
  if (start <= mid - 1) {
    this.left = BinarySearchTree();
    this.left.rebalanceHelper(values, start, mid - 1);
  }
  if (mid + 1 <= end) {
    this.right = BinarySearchTree();
    this.right.rebalanceHelper(values, mid + 1, end);
  }
};


BinarySearchTree.prototype.rebalance = function() {
  var leafDepth = this.getLeafDepth();
  if (Math.max(...leafDepth) > Math.min(...leafDepth) * 2) {
    var values = [];
    var cb = function(value) {
      values.push(value);
    };
    this.depthFirstLog(cb);
    this.rebalanceHelper(values, 0, values.length - 1);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
