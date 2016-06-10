var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);





  if (this._storage[index] === undefined) {
    this._storage[index] = [
      [k, v]
    ];
  }






  if (this._storage[index]) {

    for (var i = 0; i < this._storage[index].length; i++) {

      if (this._storage[index][i][0] === k) {
        this._storage[index][i] = [k, v];
      }
      if (this._storage[index][i][0] !== k) {
        this._storage[index].push([k, v]);
      }
    }
  }

}


//[[[1,2]],[[3,4]],[[5,6],['a',b]],[[7,8]],[k,v]]]


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //[[5,6],['a',b]]
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }

  }



};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage[index][0][1] = undefined;




};


