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

Building.prototype.fetchElevator = function(targetFloor) {
  if (targetFloor < 1 || targetFloor > this.floors) return;

  let closest; //index of the closest elevator
  let shortestDistance; //tracks the current shortest distance from the closet elevator.

  this.activeElevators.forEach((e, i) => {
    let distance = Math.abs(e.floor - targetFloor);

    // if the elevator is moving in the wrong direction, ignore it.
    if (e.moving) {
      if (e.floor < targetFloor && e.direction === 'down') {
        return;
      }

      if (e.floor > targetFloor && e.direction === 'up') {
        return;
      }
    }

    if (!closest) {
      //don't have a closest one yet, so keep this on.
      closest = i;
      shortestDistance = distance;
      return;
    }

    if (distance < shortestDistance) {
      // we have a new closest elevator
      closest = i;
      shortestDistance = distance;
    }
  });

  this.elevators[closest].move(targetFloor);
};

module.exports = Building;
