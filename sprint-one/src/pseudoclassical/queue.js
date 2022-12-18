var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function () {
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

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};


