// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(data){
        this.head = new Node(data,this.head);
    }
    size(){
        if(!this.head) return 0;
        let count = 1;
        let node = this.head;
        if(node.next==null){
            return count;
        }
        while(node.next!=null){
            node = node.next;
            count++;
        }
        return count;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        if(!this.head) return null;
        let node = this.head;
        while(node){
            if(node.next==null){
                return node
            };
            node = node.next;
        }
    }
    
    clear(){
        this.head=null;
    }

    removeFirst(){
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head) return null;
        if(this.size()==1){
            return this.removeFirst();
        }
        let previous = this.head;
        let node = this.head.next;
        while(node){
            if(node.next==null){
                previous.next = null;
            }
            previous=node;
            node=node.next;
        }
    }

    insertLast(data){
        let newNode = new Node(data);
        if(!this.head) this.head = newNode;
        let lastNode = this.getLast();
        lastNode.next = newNode;
    }

    getAt(index){
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter==index) return node;
            node = node.next;
            counter++;
        }
        return null;
    }
}

module.exports = { Node, LinkedList };
