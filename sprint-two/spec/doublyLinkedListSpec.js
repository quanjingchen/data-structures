describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublyLinkedList

  it('should point to a previous node value', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.prev.value).to.equal(4);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(5)).to.equal(false);
  });

  it('should have robust prev property', function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(4);
    // doublyLinkedList.traverse();
    var expected = [4, 3, 2, 1];
    var result = [];
    result.push(doublyLinkedList.removeTail());
    result.push(doublyLinkedList.removeTail());
    result.push(doublyLinkedList.removeTail());
    result.push(doublyLinkedList.removeTail());
    expect(result).to.eql(expected);
  });

  it('should have a robust removeHead function', function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(4);
    var expected = [1, 2, 3, 4];
    var result = [];
    result.push(doublyLinkedList.removeHead());
    result.push(doublyLinkedList.removeHead());
    result.push(doublyLinkedList.removeHead());
    result.push(doublyLinkedList.removeHead());
    expect(result).to.eql(expected);
  });
});
