var BloomFilter = function () {
  var BFMethods = Object.create(BloomFilter.prototype);
  BFMethods.m = 18;
  BFMethods.k = 3;
  BFMethods.storage = new Array(m).fill(0);
  return BFMethods;

};

BloomFilter.prototype.insert = function(input) {
  var hashKey1 = this.hashfn1(input);
  var hashKey2 = this.hashfn2(input);
  var hashKey3 = this.hashfn3(input);
  this.storage[hashKey1] = 1;
  this.storage[hashKey2] = 1;
  this.storage[hashKey3] = 1;
};

BloomFilter.prototype.contains = function(input) {
  var hashKey1 = this.hashfn1(input);
  var hashKey2 = this.hashfn2(input);
  var hashKey3 = this.hashfn3(input);
  if (this.storage[hashKey1] && this.storage[hashKey2] && this.storage[hashKey3]) {
    return true;
  }
  return false;
};

BloomFilter.prototype.hashfn1 = function(input) {
  var output = 0;
  for (var i = 0; i < input.length; i++) {
    output += input.charCodeAt(i) * (i + 1);
  }

  return output % this.m;
};

BloomFilter.prototype.hashfn2 = function(input) {
  var output = 0;
  for (var i = input.length; i > 0; i++) {
    output += input.charCodeAt(i) * (i + 1);
  }
  return output % this.m;
};

BloomFilter.prototype.hashfn3 = function(input) {
  var output = 0;
  for (var i = 0; i < input.length; i++) {
    output += input.charCodeAt(i) * input.charCodeAt(i);
    output = output & output;
    output = output.abs(output);
  }
  return output % this.m;
};

