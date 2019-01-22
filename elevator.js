import * as report from './utils/statusReport';

function Elevator(id) {
  this.id = id;
  this.floor = 1;
  this.moving = false;
  this.direction = '';
  this.trips = 0;
  this.requireMaintenance = false;
}

Elevator.prototype.move = function(targetFloor) {
  this.moving = true;
  if (targetFloor > this.floor) {
    this.direction = 'up';
    this.floor++;

    while (this.floor < targetFloor) {
      report.move(this.floor);
      this.floor++;
    }
  }

  report.arrive(targetFloor);
};
