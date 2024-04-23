{
  {
    class Node {
      constructor(value, next) {
        this.value = value;
        this.next = next;
      }
    }
    class Stack {
      constructor() {
        this.top = new Node(null, null);
        this.size = 0;
      }

      push(val) {
        var newNode = new Node(val, this.top);
        this.top = newNode;
        this.size++;
      }

      peek() {
        if (this.size > 0) {
          return this.top.value;
        } else {
          throw "stack underflow";
        }
      }

      
    }
  }
}
