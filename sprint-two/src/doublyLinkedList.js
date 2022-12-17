var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = aNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  };

  list.addToHead = function (value) {
    var newNode = aNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  };

  list.removeHead = function() {
    var output = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      return output;
    }
    this.head.prev = null;
    return output;
  };

  list.removeTail = function() {
    var output = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail === null) {
      return output;
    }
    this.tail.next = null;
    return output;
  };

  list.contains = function(target) {
    var memo = this.head;
    while (memo != null) {
      if (memo.value === target) {
        return true;
      }
      memo = memo.next;
    }
    return false;
  };

  list.traverse = function() {
    var temp = this.head;
    while (temp != null) {
      console.log(temp);
      temp = temp.next;
    }
  };
  return list;
};

var aNode = function(value) {
  var node = {};
  node.value = value;
  node.prev = null;
  node.next = null;
  return node;
};