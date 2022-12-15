var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.head === null) {
      var newNode = Node(value);
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var output = this.head.value;
    this.head = this.head.next;
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
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
