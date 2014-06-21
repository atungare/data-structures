describe('set', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should add numbers to a set', function(){
    set.add(7);
    set.add(3);
    expect(set.contains(7)).to.equal(true);
    expect(set.contains(3)).to.equal(true);
  });

  it('should add objects to a set', function(){
    var obj = {a: 'Hello'};
    set.add({a: 'Hello'});
    set.add({b: 'hi'});
    expect(set.contains({a: 'Hello'})).to.equal(true);
    expect(set.contains({b: 'hi'})).to.equal(true);
    expect(set.contains(obj).to.equal(true);
  });

  it('should remove numbers from a set', function(){
    set.add(7);
    set.remove(7);
    expect(set.contains(7)).to.equal(false);
  });

  it('should remove objects from a set', function(){
    set.add({a: 'Hello'});
    set.remove({a: 'Hello'});
    expect(set.contains({a: 'Hello'})).to.equal(false);
  });
});
