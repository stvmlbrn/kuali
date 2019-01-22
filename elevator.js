const { arrive, move, openDoor, closeDoor } = require('./utils/statusReport');

/**
 * Represents an elevator in the building
 * @constructor
 * @param {integor} id - the ID of the elevator to distinguish between
 * other elevevators in the same building
 */
function Elevator(id) {
  this.id = id;
  this.floor = 1;
  this.moving = false;
  this.direction = '';
  this.trips = 0;
  this.requireMaintenance = false;
  this.doorIsOpen = false;
}

/**
 * Handle reporting and status updates when an elevator is moving
 * @param {integer} targetFloor - the floor number to move to
 */
Elevator.prototype.move = function(targetFloor) {
  if (this.doorIsOpen) {
    this.closeDoor();
  }

  this.moving = true;
  /**
   * Increment or decrement the instance floor value before
   * while loop to avoid reporting in the event of only moving
   * 1 floor.
   */
  if (targetFloor > this.floor) {
    this.direction = 'up';
    this.floor++;

    while (this.floor < targetFloor) {
      move(this.id, this.floor);
      this.floor++;
    }
  } else {
    this.direction = 'down';
    this.floor--;

    while (this.floor > targetFloor) {
      move(this.id, this.floor);
      this.floor--;
    }
  }

  this.moving = false;
  this.trips++;

  if (this.trips >= 100) {
    this.requireMaintenance = true;
  }

  arrive(this.id, targetFloor);
  this.openDoor();
};

/**
 * Set the doorIsOpen status to true and report
 * that the doors are opening.
 */
Elevator.prototype.openDoor = function() {
  if (this.doorIsOpen) return;

  this.doorIsOpen = true;
  openDoor(this.id);
};

/**
 * Set the doorIsOpen status to false and report
 * that the doors are closing.
 */
Elevator.prototype.closeDoor = function() {
  if (!this.doorIsOpen) return;

  this.doorIsOpen = false;
  closeDoor(this.id);
};
