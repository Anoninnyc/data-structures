// to do:
// Test to see if recursion works 
//ensure 6 goes to the left of 3;
// ensure, if there is no left, nothing happens. 
 
var BinarySearchTree = function(value) {
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
counter=0;
var newTree={};
extend(newTree,methods);
return newTree;
};

{"value":2, "right": {"value":3, right:{"value":7, right:null, left:null}, left:null}, "left": null}

var methods={};

methods.insert= function(value,tree){

if (this.counter===0){
this[0]={"value":value, "right": null, "left": null};
}

var tree= tree||this[0];
counter++


if (value<tree['value']){
  if (tree.left===null){
    tree.left={"value":value, right:null, left:null};
  }
 if (tree.left!==null){
   methods.insert(value,tree.left);
  }

  }



if (value>tree['value']){
  if (tree.right===null){
    tree.right={"value":value, right:null, left:null};
  }
 if (tree.right!==null){
   methods.insert(value,tree.right);
  }

  }




} 





methods.contains= function(value){

}

methods.depthFirstLog= function(){

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
