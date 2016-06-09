var Queue = function() {
  this.storage={};
  this.counter=0;
};


Queue.prototype.enqueue= function(value){
  
  for (var key in this.storage){
    this.storage[1+ Number(key)]=this.storage[key];

  }
  this.storage[0]=value;
  this.counter++;
}

Queue.prototype.dequeue= function(){
  if (this.counter>0){
  this.counter--;
  return  this.storage[this.counter];
}
}


Queue.prototype.size= function(){
  return this.counter;
}



