const Elevator = require('./elevator');

/**
 *
 * @param {object} - an object to initialize the building. Keys
 * should include totalElevators and totalFloors. Defaults to 1 elevator
 * and 2 floors, so new buildings can be created without passing in
 * an init object.
 */
function Building({ totalElevators = 1, totalFloors = 2 } = {}) {
  this.floors = Math.max(totalFloors, 2); //must have at least 2 floors to require an elevator
  this.elevators = [];
  this.activeElevators = []; //only elevators not in maintenance mode

  this._init = function() {
    for (let i = 1; i <= totalElevators; i++) {
      this.elevators.push(new Elevator(i));
    }

    this.activeElevators = [...this.elevators];
  };

  this._init();
}

Building.prototype.fetch = function(targetFloor) {};

module.exports = Building;
