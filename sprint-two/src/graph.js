
// this will refer to newGraph;

// Instantiate a new graph
var Graph = function() {
 
  this.counter=0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
this[this.counter] ={value:node,edge:[]}; 
this.counter++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this){
    if (this[key]['value']===node){
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this){
    if (this[key]['value']===node){
      this[key]='bbsf';
    }
  }
  this.counter--;

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

 
for (var key in this){
  if (this[key]['value']===fromNode){
    return  this[key]['edge'].indexOf(toNode)>-1;
     }
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
// if the object that contains fromNOde as a value has, in it's edge array, toNode, 
for (var key in this){
  if (this[key]['value']===fromNode){
        this[key]['edge'].push(toNode);
      }

       if (this[key]['value']===toNode){
        this[key]['edge'].push(fromNode);
      }

}


};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

 
for (var key in this){
  if (this[key]['value'] === fromNode) {
    var array1=this[key]['edge'];
     if (array1.indexOf(toNode)>-1) {
        array1[array1.indexOf(toNode)]=null;
       }
     }
  if (this[key]['value'] === toNode) {
    var array1=this[key]['edge'];
  if (array1.indexOf(fromNode)>-1) {
    array1[array1.indexOf(fromNode)]=null;
    }
  } 
}








};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

for (var key in this){
  if (typeof this[key]==='object'){
    cb(this[key]['value'])
  }
}


};

/*
 * Complexity: What is the time complexity of the above functions?
 */


