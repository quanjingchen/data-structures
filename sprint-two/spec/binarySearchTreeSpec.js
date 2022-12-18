describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([2, 3, 5, 7]);
  });

  it('should console log values in BFS order', function () {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    // binarySearchTree.breadthFirstLog();

  });


  it('will return an array of leaf depths', function () {
    binarySearchTree.value = 8;
    binarySearchTree.insert(3);
    binarySearchTree.insert(10);
    binarySearchTree.insert(1);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.insert(7);
    binarySearchTree.insert(14);
    binarySearchTree.insert(13);
    var expected = [3, 4, 4, 4];
    var result = binarySearchTree.getLeafDepth();
    expect(result).to.eql(expected);
  });

  it('will rebalance a tree based on leaf depth', function() {
    binarySearchTree.value = 12;
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.insert(9);
    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(5);
    binarySearchTree.insert(4);
    binarySearchTree.rebalance();
    var result = [];
    var cb = function(value) { result.push(value); };


    binarySearchTree.depthFirstLogPreorder(cb);
    var expected = [8, 5, 4, 6, 7, 10, 9, 12, 15];
    expect(result).to.eql(expected);
  });

});


//[4, 5, 6, 7, 8, 9, 10, 12, 15]
//[8, 5, 10, 4, 6, 9, 12, 7, 15]
