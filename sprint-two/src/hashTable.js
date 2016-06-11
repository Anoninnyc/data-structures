var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter=0;
};


HashTable.prototype.insert = function(k, v) {



  var index = getIndexBelowMaxForKey(k, this._limit);

console.log(this._storage,index,this._counter,this._limit)


   this._counter++;
  



  if (this._storage[index] === undefined) {
    this._storage[index] = [
      [k, v]

    ];


  }

if (this._counter >= this._limit*7.5/10){
  this._limit*=2;
  this._storage2 = this._storage;
  this._storage = LimitedArray(this._limit);
  console.log(this)


for (var i=0; i< this._limit;i++){

  if (this._storage2[i]!==undefined){

    for (var x=0;x<this._storage2[i].length;x++){
      
    this.insert(this._storage2[i][x][0],this._storage2[i][x][1]);
    this._counter--;
    }
  }
}

console.log(this._storage,this._limit,this._counter)

}
//.insert EACH into this._storage;








if (this._storage[index]!==undefined) {

    for (var i = 0; i < this._storage[index].length; i++) {
//console.log(this._storage,index,this._counter,this._limit)
      if (this._storage[index][i][0] === k) {
        this._storage[index][i] = [k, v];
      }
      if (this._storage[index][i][0] !== k) {
        this._storage[index].push([k, v]);
      }
    }
  }




}






HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //[[5,6],['a',b]]
  for (var i = 0; i < this._storage[index].length; i++) {
  if(this._storage[index]!==undefined){
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
}
  }



};

HashTable.prototype.remove = function(k) {


  var index = getIndexBelowMaxForKey(k, this._limit);
this._counter--;
 




if (this._counter <= this._limit*2.5/10){
  console.log('TESTTTTT',this._counter,this._limit)
  this._limit/=2;
  this._storage2 = this._storage;
  this._storage = LimitedArray(this._limit);


for (var key in this._storage2){

   for (var x=0;x<20;x++){
  console.log(this._storage2,this._storage2[i],i)

      if (this._storage2[key][x]!==undefined){
    this.insert(this._storage2[key][x][0],this._storage2[key][x][1]);
    this._counter++;
  }
    }
  

console.log(this._storage,index,this._counter,this._limit)
}
ß
}


for (var i=0;i<this._storage[index].length;i++){
  if ( this._storage[index][i][0]===k){
  this._storage[index][i][0] = undefined;
  }

}

}
