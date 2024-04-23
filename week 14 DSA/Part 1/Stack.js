{
  {
    class Stack {
      constructor() {
        this.stack = [];
      }

      isEmpty() {
        return this.stack.length == 0;
      }

      size() {
        this.stack.length;
      }

      peek() {
        if (this.stack.length > 0) {
          return this.stack[this.stack.length - 1];
        } else {
          throw "Stack underflow";
        }
      }
      push(val) {
        this.stack.push(val);
      }

      pop() {
        if (this.stack.length > 0) {
          return this.stack.pop();
        } else {
          throw "Stack underFlow";
        }
      }

      print() {
        return this.stack;
      }
    }

    var s = new Stack();
    s.push("Laxman");
    s.push("Rohit");
    s.push("Jeevan");

    console.log(s.print());
    console.log(s.isEmpty());
    console.log(s.peek());

    console.log(s.print());
    console.log(s.peek());
    s.pop();
    console.log(s.print());
  }
}
