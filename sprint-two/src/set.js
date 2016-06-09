var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item]=item;
};

setPrototype.contains = function(item) {
  if (this._storage[item]){
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {

  for (var key in this._storage){
    if (this._storage[key]===item){
      this._storage[key]=null;

    }
  }





};

/*
 * Complexity: What is the time complexity of the above functions?
 */
