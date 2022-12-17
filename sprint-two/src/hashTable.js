var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
  var hashMethods = Object.create(HashTable.prototype);
};
//[ [V1, V2], , , , ,  ]
//k ='Steven', v = 'Tyler'
HashTable.prototype.insert = function(k, v) {
  if (this._counter >= this._limit * 0.75) {
    var memo = [];
    this._counter = 0;
    for (var i = 0; i < this._limit; i++) {
      if (this._storage.get(i) !== undefined) {
        memo.push(this._storage.get(i));
        this._counter += 1;
      }
    }
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);

    for (var x = 0; x < memo.length; x++) {
      var newIndex = _getIndexBelowMaxForKey(memo[x][0], this._limit);
      this._storage.set(newIndex, memo[x]);
    }
  }
  var index = _getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k, v]);
  this._counter += 1;
};

HashTable.prototype.retrieve = function(k) {
  var index = _getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return;
  }
  return this._storage.get(index)[1];
};

HashTable.prototype.remove = function(k) {
  var index = _getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);

  this._counter -= 1;

  if (this._counter < (this._limit * 0.25) && this._limit !== 8) {
    var memo = [];
    this._counter = 0;
    for (var i = 0; i < this._limit; i++) {
      if (this._storage.get(i) !== undefined) {
        memo.push(this._storage.get(i));
        this._counter += 1;
      }
    }

    this._limit /= 2;
    console.log(memo, memo.length);
    this._storage = LimitedArray(this._limit);
    for (var x = 0; x < memo.length; x++) {
      var newIndex = _getIndexBelowMaxForKey(memo[x][0], this._limit);
      this._storage.set(newIndex, memo[x]);
    }
  }
};
//[tyler, harrison, doob, ...... , turing, eich]
//[tyler, harrison, doob, turing, eich, ....]


/*
 * Complexity: What is the time complexity of the above functions?
 */


