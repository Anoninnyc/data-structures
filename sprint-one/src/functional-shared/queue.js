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


