var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.counter = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.counter++;
  for (var key in this.storage){
    this.storage[Number(key)+1] = this.storage[key];
  }

  this.storage[0] = value;
}


queueMethods.dequeue = function(){
  if (this.counter > 0){
    this.counter--;
    return this.storage[this.counter];
  }
}

queueMethods.size = function(){
  return this.counter;
}


