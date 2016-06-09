var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
_.extend(newTree,treeMethods);

  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
 this.children.push(Tree(value));

};

treeMethods.contains = function(target,tree,xxx) {
  var final= xxx===undefined?false:xxx
  var tree = tree || this;
  if (tree.value === target){
    final= true;
  }
  for (var i = 0; i < tree.children.length;i++){
    final= treeMethods.contains(target, tree.children[i],final);
  }
  return final;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 // treeMethods.addChild = O(1)
 // treeMethods.contains = O(n)