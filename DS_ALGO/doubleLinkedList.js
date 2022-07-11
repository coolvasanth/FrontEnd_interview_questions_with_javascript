class Node {
    constructor(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addElement(element){
        let node = new Node(element);
        if(this.head === null){
            this.head = node;
            node.prev = this.head; 
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
            node.prev = current;
        }
        this.size++;
    }

    addElementAt(index, element){
        let node = new Node(element);
        let current = this.head, llindex = 0, prev = null;
        while(current){
            if (llindex === index) {
                prev.next = node;
                node.prev = prev;
                node.next = current;
                current.prev = node;
                return;
            }
            prev = current;
            current = current.next;
            llindex++;
        }
        this.size++;
    }

    searchElement(element){
        let current = this.head;
        while(current){
            if(current.element === element){
                return true;
            }
            current = current.next;
        }
        return false;
    }


    removeAtIndex(index){
        let current = this.head, prev = null, llIndex = 0;
        if(index === 0){
            this.head = current.next;
            return;
        }
        while(current){
            if(llIndex === index){

                if(current.next === null){
                    prev.next = null;
                    return;
                }else{
                    prev.next = current.next;
                    current.next.prev = prev;
                    return;
                }
            }
            prev = current;
            current = current.next;
            llIndex++;
        }
    }

    removeElement(element){
        let current = this.head, prev = null, llIndex = 0;
        if(element === current.element){
            this.head = current.next;
            return;
        }
        while(current){
            if(element === current.element){
                if(current.next === null){
                    prev.next = null;
                    return;
                }else{
                    prev.next = current.next;
                    current.next.prev = prev;
                    return;
                }
            }
            prev = current;
            current = current.next;
            llIndex++;
        }
    }

    printList(){    
        let current = this.head;
        let output = " "
        while(current){
            output += current.element + " ";
            current = current.next;
        }
        return output;
    }
}

const dll = new DoubleLinkedList()
dll.addElement(10)
dll.addElement(20)
dll.addElement(30)
// dll.addElementAt(30, 100)
// console.log(dll.searchElement(100)); 
console.log(dll.printList());
// dll.removeElement(20); 
// console.log(dll.searchElementAt(2));
// console.log(dll.printList());

