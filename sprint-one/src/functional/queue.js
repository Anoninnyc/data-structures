 //var testObj= {0: 'test', 1: 'test2', 2:'test3'};


var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
var counter=0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
    for (var key in storage){
      var number=Number(key)+1;
      storage[number]=storage[key];
    }
storage[0]=value;
return storage;
  };

  someInstance.dequeue = function() {
    if (counter>0){
    counter--;
    return storage[counter];
     }

  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
