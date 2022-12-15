

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  var hashMethods = Object.create(HashTable.prototype);
};
//[ [V1, V2], , , , ,  ]

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [v]);
  } else {
    this._storage.retrieve()
  }
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


