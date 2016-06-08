var Stack = function() {
  var newStack={
  };
  newStack.counter = 0;
  _.extend(newStack, stackMethods);

  return newStack;

};


var stackMethods = {
};


stackMethods.size= function(){
 return this.counter;
 };

 stackMethods.push = function(){
  this.counter++;
 };

 

 