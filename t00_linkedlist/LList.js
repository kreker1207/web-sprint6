const LLData = require("./LLData");
 class LList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    getFirst(){
        return this.head.data;
    }
    getLast(){
        if(!this.head) {
            return null;
        }
        let node = this.head;
        while(node){
            if(!node.next){
                return node;
            }
            node = node.next;
        }
    }
    add(value) {
        let node = new LLData(value);
        if (this.length === 0)
            this.head = node;
        else {
            let q = this.head;
            while(q.next)
                q = q.next;
            q.next = new LLData(value);
        }
        this.length++;
    }
    addFromArray(arrayOfData){
        if(arrayOfData){
            for(let i = 0; i < arrayOfData.length; i++)
                this.add(arrayOfData[i])
            }
            else return;
        }
    
    remove(value) {
        if (this.head.data === value) {
            this.head = this.head.next;
            this.length--;
            return;
        } else
            for (let q = this.head; q.next; q = q.next)
                if (q.next.data === value) {
                    q.next = q.next.next;
                    this.length--;
                    break;
                }
    }
    removeAll(value) {
        if (this.head.data === value) {
            this.head = this.head.next;
            this.length--;
            return;
        } else
            for (let q = this.head; q.next; q = q.next)
                if (q.next.data === value) {
                    q.next = q.next.next;
                    this.length--;
                }
    }
    contains(value) {
        for (let q = this.head; q; q = q.next)
            if (q.data === value)
                return true;
        return false;
    }
    [Symbol.iterator] = function() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    let value = current.data;
                    current = current.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        };
    };
    clear() {
        this.head = null;
    }
    count() {
        return this.length;
    }
    toString() {
        let res = '';
        for (let q = this.head; q; q = q.next) {
            res += q.data;
            if (q.next)
                res += ', ';
        }
        return res;
    }
    getIterator(){
        return this[Symbol.iterator];
    }
    filter(callback){
        const list = new LList;
        
       for(let node of this){
           if(callback(node)){
               list.add(node);
           }
       }
       return list;

    }
}


module.exports = {LList};