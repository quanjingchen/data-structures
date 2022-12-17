var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var key = JSON.stringify(item);
  this._storage[key] = true;
};

setPrototype.contains = function(item) {
  var key = JSON.stringify(item);
  return Boolean(this._storage[key]);
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    var key = JSON.stringify(item);
    delete this._storage[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
