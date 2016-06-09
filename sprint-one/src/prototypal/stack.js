var Stack = function() {

var newStack= Object.create(stackMethods);
newStack.storage={};
newStack.counter=0;
return newStack;
};

var stackMethods = {};


stackMethods.push=function(value){
  this.counter++;
  this.storage[this.counter]=value;

};

stackMethods.pop=function(){
  if (this.counter>0){
this.counter--;
return this.storage[this.counter+1]
}

};

stackMethods.size=function(){

return this.counter;

};


