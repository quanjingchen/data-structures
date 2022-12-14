class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var len = Object.keys(this.storage).length;
    this.storage[len] = value;
  }

  pop() {
    var len = Object.keys(this.storage).length;
    if (len === 0) {
      return undefined;
    } else {
      var element = this.storage[len - 1];
      delete this.storage[len - 1];
      return element;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }
}