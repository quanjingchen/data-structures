describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    set.add(22);
    set.add('22');
    set.add([]);
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains(22)).to.equal(true);
    expect(set.contains('22')).to.equal(true);
    expect(set.contains([])).to.equal(true);

  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    set.add(11);
    set.remove(11);
    set.add([]);
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains(11)).to.equal(false);
    expect(set.contains([])).to.equal(true);
  });

});
