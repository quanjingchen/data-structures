var Queue = function() {

  var someInstance = {
    data: storage,
    head: 0,
    tail: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[someInstance.tail] = value;
    someInstance.tail++;
  };

  someInstance.dequeue = function() {
    var len = Object.keys(storage).length;
    if (len === 0) {
      return undefined;
    } else {
      var element = storage[someInstance.head];
      delete storage[someInstance.head];
      someInstance.head++;
      return element;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;

  };

  return someInstance;
};
