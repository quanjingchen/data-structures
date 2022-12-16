

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
  var hashMethods = Object.create(HashTable.prototype);
};
//[ [V1, V2], , , , ,  ]
//k ='Steven', v = 'Tyler'
HashTable.prototype.insert = function(k, v) {
  if (this._counter > (this._limit / 2) + 1) {
    var memo = [];
    this._counter = 0;
    for (var i = 0; i < this._limit; i++) {
      if (this._storage.get(i) !== undefined) {
        memo[i] = this._storage.get(i);
        this._counter += 1;
      }
    }
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);

    for (var x = 0; x < memo.length; x++) {
      this._storage.set(x, memo[x]);
    }
    console.log('from insert function ', memo, this._counter);
  }
  var index = _getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
  this._counter += 1;


};

HashTable.prototype.retrieve = function(k) {
  var index = _getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = _getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  this._counter -= 1;
  console.log('counter', this._counter);

  if (this._counter < (this._limit / 2 - 1) && this._limit !== 8) {
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
      this._storage.set(x, memo[x]);
    }
  }
};
//[tyler, harrison, doob, ...... , turing, eich]
//[tyler, harrison, doob, turing, eich, ....]


/*
 * Complexity: What is the time complexity of the above functions?
 */


