var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
var index = getIndexBelowMaxForKey(k, this._limit);


if (this._storage[index]===undefined){
this._storage[index] = [];
this._storage[index].push([k,v]);
};


for (var i=0;i<8;i++){
  if (this._storage[i]){
  for (var x=0;x<this._storage[i].length;x++){  
    if (this._storage[i].length>0 &&this._storage[i][x][0]===k){
     this._storage[i][x]= [k,v];
    }

  if (this._storage[i]&&this._storage[i][x][0]!==k){
  this._storage[i].push([k,v]);
  };

}
  }
}





};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

 for (var i=0; i<8; i++){
  if (this._storage[i]){
for (var x=0;x<this._storage[i].length;x++){
  if (this._storage[i][x][0] === k){
    return this._storage[i][x][1];
  }
}
}
}
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);



 for (var i=0; i<8; i++){
  if (this._storage[i]){
  for (var x=0;x<this._storage[i].length;x++){
  if (this._storage[i][x][0] === k){
    this._storage[i][x]=[undefined,undefined];
  }
}
}
}










};



/*
 * Complexity: What is the time complexity of the above functions?
 */


