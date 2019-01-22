exports.arrive = (elevatorID, floor) => {
  console.log(`Elevator ${elevatorID} arriving at floor ${floor}`);
};

exports.move = (elevatorID, floor) => {
  console.log(`Elevator ${elevatorID} moving past floor ${floor}`);
};

exports.openDoor = elevatorID => {
  console.log(`Elevator ${elevatorID} opening door`);
};
