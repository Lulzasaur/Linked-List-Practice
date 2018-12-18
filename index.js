//For practice on Linked Lists

// Arrays/Linked Lists Exercises
// Write a class for Node (try to do this without copying ours directly from lecture nodes — visualize: what are the two things a node needs?)

// Write a class for LinkedList. It should have a head and a tail attribute which are initially null.

// Add methods for:

// append(data)
// Appends a new node with that data to end of list. (Again, it will help you to do this as much as possible without copying this from our example).
// getAt(idx)
// Retrieve node at index position idx.
// unshift(data)
// Add a new node with data data to the head.
// shift(data)
// Remove & return head node.
// pop(data)
// Remove & return tail node. Make sure you fix the next pointer on the next-to-last node!
// insertAt(idx, data)
// Insert a new node at position idx.
// removeAt(idx)
// Remove & return node at position idx.

class Node {
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(data){

        let node = this.head

        if(!node){
            this.head = new Node(data)
            this.tail = this.head
            return
        }

        while(node.next){
            node = node.next
        }

        node.next = new Node(data)
        this.tail = node.next
    }

    getAt(idx){
        
        let node = this.head,
            count = 0;

        if(!node){
            return null
        }

        while(count<idx){
            if(node){
                node = node.next
                count++
            } else{
                return null
            }
        }
        return node
    }

    unshift(data){
        this.head = new Node(data,this.head)

        if(!this.tail){
            this.tail = this.head
        }
    }

    shift(){
        let node = this.head
        this.head = this.head.next
        
        if(!this.tail){
            this.tail = this.head
        }
        return node
    }

    pop(){
        let prev = this.head,
            next = prev.next,
            tail = this.tail

        if(!prev){
            return null
        }

        if(!next){
            this.head=null,
            this.tail=null
        }

        while(next.next){
            prev = prev.next,
            next = next.next
        }

        this.tail = prev
        prev.next = null
    
        return tail
    }

    size(){
        let node = this.head,
            count = 0
        
        while(node){
            node = node.next
            count++
        }
        return count
    }

    insertAt(idx,data){

        if(idx>this.size()){
            idx = this.size()
        }

        if(idx===0){
            this.unshift(data)
            return
        }

        let prev = this.getAt(idx-1),
            next = this.getAt(idx),
            node = new Node(data,next)

        if(!prev){
            this.head = node
            return
        } 
        prev.next = node
    }

    removeAt(idx){

        if(!this.head){
            return null
        }

        if(idx===0){
            this.head = this.head.next
            return
        }

        let prev = this.getAt(idx-1),
            next = this.getAt(idx+1)
        
        prev.next = next
    }

    average(){
        let node = this.head,
            sum = 0;

        while(node){
            sum += node.data
            node=node.next
        }
        return sum/this.size()
    }

    reverse(){
        let prev = null,
            curr = this.head,
            next = null

        this.tail = curr

        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }    

        this.head = prev

    }


}


module.exports = { Node, LinkedList };
