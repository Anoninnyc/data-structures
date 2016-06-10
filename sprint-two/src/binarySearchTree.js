// to do:
// Test to see if recursion works;
//ensure 6 goes to the left of 3; add another if statement if (there's a [larger] child to the right ALREADY)
//{ go to the left instead}, && vice versa;
// ensure, if there is no left, nothing happens. The test is telling us there must be a property @ newTree[0].left... why? there shouldn't be

// concat arrays when recursing

var BinarySearchTree = function(value) {
  var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  };
 
  var newTree = {}; 
  newTree.storage = [value];
newTree.value=value;
   newTree.right = null;
     newTree.left = null;
    
  extend(newTree, methods);
  return newTree;
};



//Example: {"value":2, "right": {"value":3, right:{"value":7, right:null, left:null}, left:null}, "left": null}

var methods = {};

methods.insert = function(value, tree) {

  // this wil help keep track of whih tree/node we're on 
  var tree = tree || this;
  //


  if (value < tree['value']) {
    //if there's nothing below current 'tree', just add your value/node below the current tree.    
    if (tree.left === null) {
      tree.left = {
        "value": value,
        right: null,
        left: null,
         storage : []
      };
      if(this.storage && this.storage.indexOf(value) === -1){
      this.storage.push(value)
    }
    }
    // if there IS something there, then consider our value WRT that 'something' via recursion. 
    if (tree.left !== null) {
      methods.insert(value, tree.left);
    }
    //
  }



  if (value > tree['value']) {

    //if there's nothing below current tree, just add your value/node below the current tree.

    if (tree.right === null) {
      tree.right = {
        "value": value,
        right: null,
        left: null,
        storage : [5,5]
      };
      console.log(this.storage);
      if(this.storage && this.storage.indexOf(value)){
      this.storage.push(value)
    }
    }
    //


    // if there IS something there, then consider our value WRT that 'something' via recursion. 
    if (tree.right !== null) {
      methods.insert(value, tree.right);
    }

    }



  }




methods.contains = function(value, node) {
 var node = node || this;
 if (value === node.value){
    return true;
 }
 if (node.left !== null && value < node.value){
  return methods.contains(value, node.left)
 }
 if (node.right !== null && value > node.value){
  return methods.contains(value, node.right)
 }
 return false
}

methods.depthFirstLog = function(cb) {
  for (var i = 0; i < this.storage.length; i++){
    cb(this.storage[i]);
  }

}