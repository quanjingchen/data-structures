var Stack = function() {

  var someInstance = {
    data: storage
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var len = Object.keys(storage).length;
    storage[len] = value;
  };

  someInstance.pop = function() {
    var len = Object.keys(storage).length;
    if (len === 0) {
      return undefined;
    } else {
      var element = storage[len - 1];
      delete storage[len - 1];
      return element;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
