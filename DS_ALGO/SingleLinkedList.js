class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    addElement(element){
        let node = new Node(element);
        if(this.head === null){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    searchAt(index){
        if(this.head === null){
            return -1;
        } else if(index > this.size){
            return -1;
        } else if(index < 0){
            return -1;
        } else {
            let current = this.head;
            let llIndex = 0;
            while(current){
                if(llIndex === index){
                    return current.element;
                }
                llIndex++;
                current = current.next;
            }
            return -1;
        }
        
    }


    searchElement(element){
        if(this.head === null){
            return -1;
        }
        let current = this.head;
        while(current){
            if(current.element === element){
                return true;
            }
            current = current.next;
        }
        return false;
    }


    printList(){
        let current = this.head;
        let output = " ";
        while (current) {
            output+= current.element + " "
            current = current.next;
        }
        return output;
    }
}

const  ll = new LinkedList();
// ll.addElement(10)
// ll.addElement(20)
// ll.addElement(30)
console.log(ll.printList());
// console.log(ll.searchElement(100));
console.log(ll.searchAt(-10));
