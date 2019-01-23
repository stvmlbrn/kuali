/**
 * this is just a test file I'm using to test object creation and methods.
 */

const Building = require('./building');

const B = new Building({ totalElevators: 2, totalFloors: 100 });

B.fetchElevator(10);

B.fetchElevator(14);

B.fetchElevator(5);

B.fetchElevator(20);

B.fetchElevator(12);
