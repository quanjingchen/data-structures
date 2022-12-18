
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Use an object with numeric keys to store values
  var storage = {};
  var someInstance = {
    storage: storage,
    push: stackMethods.push,
    pop: stackMethods.pop,
    size: stackMethods.size
  };
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var len = Object.keys(this.storage).length;
  this.storage[len] = value;
};

stackMethods.pop = function() {
  var len = Object.keys(this.storage).length;
  if (len === 0) {
    return undefined;
  } else {
    var element = this.storage[len - 1];
    delete this.storage[len - 1];
    return element;
  }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};


