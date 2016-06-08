var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
var key=0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    key++;

  };

  someInstance.dequeue = function() {
    key--;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
