var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail) {
      list.tail.next  = Node(value);
    }
    list.tail= Node(value);
    if (list.head === null){
      list.head = list.tail;
    }
    

  };

  list.removeHead = function() {
    var prevHead = list.head;
    list.head = list.head.next;
    return prevHead.value;

  };

  list.contains = function(target,node) {
    var node = node || list.head;
    while (node.value !== list.tail.value){
        if (node.value === target){
          return true;
        } 
        else if (list.tail.value === target){
          return true;
        } else {
          return list.contains(target, node.next);
        }
      };
      return false;
    };

  return list;
};








var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

