var Stack = function() {
  var newStack={};
  newStack.storage={};
  newStack.counter = 0;
  _.extend(newStack, stackMethods);

  return newStack;

};


var stackMethods = {
};


stackMethods.size= function(){
 return this.counter;
 };

 stackMethods.push = function(value){
  this.storage[this.counter]=value;
  this.counter++;
 };

 stackMethods.pop = function(){

if (this.counter>0){


  this.counter--;

  return this.storage[this.counter];
}


 };



 