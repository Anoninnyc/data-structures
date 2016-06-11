var Tree = function(value) {
  var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  };
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);
  newTree.parent = null;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};


treeMethods.removeFromParent = function(value, tree) {
  var tree = tree || this;
  console.log(tree)

  if (tree.parent !== null) {
    var listOfSibs = tree.parent.children;
    for (var i = 0; i < listOfSibs.length; i++) {
      if (listOfSibs[i].value === value) {


        listOfSibs[i].parent = null;
        listOfSibs[i] = null;

      }
    }
  }



  if (tree.children.length > 0) {
    for (var i = 0; i < tree.children.length; i++) {
      treeMethods.removeFromParent(value, tree.children[i]);
    }
  }
  
};






treeMethods.addChild = function(value) {

  var newChild = Tree(value)
  newChild.parent = this
  this.children.push(newChild);

};





treeMethods.contains = function(target, tree, xxx) {
  var final = xxx === undefined ? false : xxx
  var tree = tree || this;
  if (tree.value === target) {
    final = true;
  }
  for (var i = 0; i < tree.children.length; i++) {
    final = treeMethods.contains(target, tree.children[i], final);
  }
  return final;
};