var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.head = 0;
  obj.tail = 0;
  return obj;
};

var queueMethods = {};

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