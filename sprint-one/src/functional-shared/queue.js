

var Queue = function() {
 var newQueue= {};
 newQueue.counter=0;
 newQueue.storage={};
_.extend(newQueue,queueMethods);

return newQueue;

};

var queueMethods = {};

queueMethods.size=function(){

  return this.counter;
}

queueMethods.enqueue=function(value){

  for (var key in this.storage){
    this.storage[Number(key) + 1]=this.storage[key];
  }

  this.storage[0]=value;
  this.counter++;
  }


queueMethods.dequeue=function(){

if (this.counter>0){
  this.counter--;
  return this.storage[this.counter];
}

};
