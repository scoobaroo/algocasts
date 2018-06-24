// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// stack has peek, pop, and push methods
class Queue {
    constructor(){
        this.inbox = new Stack();
        this.outbox = new Stack();
    }
    add(element){
        this.inbox.push(element);
    }
    remove(){
        while(this.inbox.peek()){
            this.outbox.push(this.inbox.pop());
        }
        return this.outbox.pop();
    }
    peek(){
        this.peekBox = this.inbox;
        while(this.peekBox.peek()){
            this.outbox.push(this.peekBox.pop());
        }
        return this.outbox.peek();
    }
}

module.exports = Queue;
