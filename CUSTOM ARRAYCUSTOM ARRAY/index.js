class Stack{
    constructor(){
        this.length=0;
        this.stack= [];
    }

    push(el){
        this.stack[this.length]= el;
        this.length++;
    }

    pop(){
        if(this.length==0)
        {
            console.log("empty")
        }
        else{
            this.stack.pop()
            this.length--
        }
    }
    peek(){
        return this.stack[this.length-1]
    }
    rev()
    {
        let bag=[];
        for(var i=this.length-1; i>=0; i--)
        {
            bag.push(this.stack[i])
        }
        return bag;
    }
    len(){
        return this.length
    }
}



// stack have push pop top peek length

let s1 = new Stack()
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
s1.push(5);
s1.push(6);

console.log(s1)
s1.pop()
console.log()
console.log(s1.peek());

console.log(s1.rev())

console.log(s1.len())


