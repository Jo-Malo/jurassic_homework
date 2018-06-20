const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
  this.winner = null;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.pop(dinosaur);
}

Park.prototype.countVisitors = function () {
  return this.collectionOfDinosaurs.guestsAttractedPerDay
}

Park.prototype.getWinningDinosaur = function () {
};

module.exports = Park;
