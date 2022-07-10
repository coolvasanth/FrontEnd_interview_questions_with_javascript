class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    addElement(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    searchAt(index) {
        if (this.head === null) {
            return -1;
        } else if (index > this.size) {
            return -1;
        } else if (index < 0) {
            return -1;
        } else {
            let current = this.head;
            let llIndex = 0;
            while (current) {
                if (llIndex === index) {
                    return current.element;
                }
                llIndex++;
                current = current.next;
            }
            return -1;
        }

    }


    searchElement(element) {
        if (this.head === null) {
            return -1;
        }
        let current = this.head;
        while (current) {
            if (current.element === element) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    removeElement(element) {
        if (this.head === null) return -1;
        let current = this.head;
        let prev = null;
        // If head node itself holds the key to be deleted
        if (current != null && current.element === element) {
            this.head = current.next; // Changed head
            this.size--;
            return;
        }
        while (current.next) {
            prev = current;
            current = current.next;
            if (current.element === element) {
                prev.next = current.next;
                this.size--;
                return;
            }
        }
    }

    removeElementAt(index) {
        let current = this.head;
        if (current === null) return -1;
        if (index === 0) {
            this.head = current.next;
            this.size--;
            return;
        }
        let prev = null, llIndex = 0;
        while (current) {

            if (llIndex === index) {
                prev.next = current.next;
                return;
                this.size--;
            }

            prev = current;
            current = current.next;
            llIndex++;
        }

    }

    findMiddleElement(){
        let middleIndex = Math.floor(this.size/2);
        let current = this.head;
        console.log('size is ' + this.size);
        for (let i = 0; i < middleIndex; i++) {
          current = current.next;
        }
        return current.element;
    }

    findMiddleElementTwoPointer(){
        if(this.head === null) return -1;
        let slow_pointer = this.head, fast_pointer = this.head;
        while(fast_pointer !== null && fast_pointer.next !== null){
            fast_pointer = fast_pointer.next.next;
            slow_pointer = slow_pointer.next;
        }
        return slow_pointer.element;
    }

    findNthFromLast(index){
        if(this.head === null) return -1;
        if(index > this.size || index === 0) return -1;
        let first_pointer = this.head, second_pointer = this.head;
        for (let i = 0; i < index; i++) {
            second_pointer = second_pointer.next;
        }
        
        while(second_pointer !== null){
            second_pointer = second_pointer.next;
            first_pointer = first_pointer.next;
        }
        return first_pointer.element;
    }

    printList() {
        let current = this.head;
        let output = " ";
        while (current) {
            output += current.element + " "
            current = current.next;
        }
        return output;
    }
}

const ll = new LinkedList();
ll.addElement(10)
ll.addElement(20)
ll.addElement(30)
ll.addElement(40)
ll.addElement(50)
ll.addElement(60)
// console.log(ll.printList());
// ll.removeElementAt(2);
console.log(ll.findNthFromLast(6)); 
// console.log(ll.printList());
// console.log(ll.searchAt(-10));
