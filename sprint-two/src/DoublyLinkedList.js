var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
var beg=true;




list.addToHead()= function(value){

    var newNode=Node(value);
    if (list.head) { 

      list.head.previous  = newNode;
      if (beg){
  list.tail= list.head;

  beg=false;
        }
      newNode.next = list.head;
    }
    list.head= newNode;
  

    if (list.tail === null){
      list.tail = list.head;
    }
    

  }


list.removeTail= function(){
var prevTail = list.tail;

    list.tail = list.tail.previous;
    list.tail.next=null;
    return prevTail.value;
}



  list.addToTail = function(value) {
    var newNode=Node(value);
    if (list.tail) { 

      list.tail.next  = newNode;
      if (beg){
  list.head= list.tail;

  beg=false;
        }
      newNode.previous = list.tail;
    }
    list.tail= newNode;
    


    if (list.head === null){
      list.head = list.tail;
    }
    

  };


  list.removeHead = function() {
    var prevHead = list.head;

    list.head = list.head.next;
    list.head.previous=null;
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
  node.previous = null;
  return node;
};