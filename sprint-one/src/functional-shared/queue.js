var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Use an object with numeric keys to store values
  var storage = {};
  var someInstance = {
    storage: storage,
    head: 0,
    tail: 0,
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue,
    size: queueMethods.size
  };
  return someInstance;
};

var queueMethods = {};
// Implement the methods below
queueMethods.enqueue = function (value) {
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function () {
  var len = Object.keys(this.storage).length;
  if (len === 0) {
    return undefined;
  } else {
    var element = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return element;
  }
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};



