const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;

  beforeEach(function () {
    park = new Park('Jurassic Park', 50);

    dinosaur1 = new Dinosaur('t-rex', 'icecream', 10);

  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual([], actual);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const actual = park.collectionOfDinosaurs[0];
    assert.deepStrictEqual(actual, dinosaur1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual([], actual);
  });

  // it('should have tourists', function() {
  //   this.collectionOfDinosaurs.addDinosaur(dinosaur1);
  //   const actual = dinosaur.guestsAttractedPerDay;
  //   assert.strictEqual(10, actual);
  // });

  // it('should be able to find the dinosaur that attracts the most visitors', function(){
  //
  // });

  // it('should be able to find all dinosaurs of a particular species');
  //
  // it('should be able to remove all dinosaurs of a particular species');

});
