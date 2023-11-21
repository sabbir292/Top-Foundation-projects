
const LinkedList = () => {
    let HEAD = null;
    let length = 0;

    const append = (value) => {
        const newNode = Node(value)
        length ++

        if(HEAD === null) return HEAD = newNode

        let pointer = HEAD;
        while(pointer.nextNode !== null){
            pointer = pointer.nextNode;
        }
        pointer.nextNode = newNode;
    }

    const prepend = (value) => {
        const newNode = Node(value)
        length ++
        if(!HEAD) return HEAD === newNode
        newNode.nextNode = HEAD
        HEAD = newNode
    }

    const size = () => {
        if(!HEAD) return null
        return length;
    }
    
    const head = () => {
        if(!HEAD) return null
        return HEAD;
    }

    const tail = () => {
        if(!HEAD) return null
        let pointer = HEAD
        while(pointer.nextNode){
            pointer = pointer.nextNode;
        }
        return pointer 
    }

    const at = (index) => {
        if(!HEAD) return null
            let pointer = HEAD
            for(let i = 0; i < index; i++){
                if(pointer){
                    pointer = pointer.nextNode
                }else alert('Invalid index at')
            }
            return pointer

    }
    
    const pop = () => {
        if(!HEAD) return null
        else if(!HEAD.nextNode) HEAD = null
        let pointer = HEAD
        while(pointer.nextNode.nextNode){
            pointer = pointer.nextNode
        }
        return pointer.nextNode = null
    }

    const contains = (value) => {
        if(!HEAD) return false
        let pointer = HEAD
        while(pointer){
            if(pointer.value !== value){
                pointer = pointer.nextNode
            }else return true   
        }
        return false
    }

    const find = (value) => {
        if(!HEAD) return null
        let pointer = HEAD
        let index = 0
        while(pointer){
            if(pointer.value !== value){
                pointer = pointer.nextNode
                index ++
            }else return index
        }
        return null
    }

    const toString = () => {
        if(!HEAD) return null
        let pointer = HEAD
        let string = ''
        
        while(pointer){
            string += `(${pointer.value})--> `
            pointer = pointer.nextNode
        }
        string += null
        return string
    }

    const insertAt = (value, index) => {
        let newNode = Node(value)
        length++
        if(!HEAD) return null
        if(index === 0){
            newNode.nextNode = HEAD;
            HEAD = newNode;
        }else{
            let prevNode = at(index - 1)
            let currentNode = at(index)
            if(prevNode && currentNode){
                prevNode.nextNode = newNode;
                newNode.nextNode = currentNode;
            }else alert("List is not that long") 
        }
    }

    const removeAt = (index) => {
        if(!HEAD) return null
        if(index > length || index < 0) return
        if(index === 0) HEAD = HEAD.nextNode;
        else{
            let prevNode = at(index - 1)
            prevNode.nextNode = prevNode.nextNode.nextNode
        }
        length --
    }

    return{
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}

const Node = (value) => {
    return {
        value,
        nextNode : null
    }
}

const list = LinkedList()
list.append(10)
list.append(11)
list.append(8)
list.prepend(6)
list.prepend(3)
const size = list.size()
const head = list.head()
const tail = list.tail()
const at = list.at(-1)
list.pop()
const contains = list.contains(11)
const find = list.find(11)
list.insertAt(99, 2)
list.insertAt(1, 2)
list.removeAt(2)
const str = list.toString()
console.log(head,tail,size,at,head, contains, find, str)




// NOtes:

// My brute force solution of the removeat bellow.

// const removeAt = (index) => {
//     if(!HEAD) return null
//     const prevNode = at(index - 1)
//     const currentNode = at(index)
//     const nextNode = at(index + 1)

//     if(!currentNode) alert('Index dont have any Node')
//     // removes tail..
//     else if(!nextNode) prevNode.nextNode = null
//     // if list has only one node, at() returns head for negetive index
//     else if(prevNode === currentNode && !nextNode){
//         HEAD = null
//         length --
//     }
//     // if list has only two nodes and removes second node
//     else if(currentNode !== prevNode && !nextNode){
//         prevNode.nextNode = null;
//         HEAD = prevNode;
//         length --
//     }
//     // list has multiple node and removes head node. index = 0;
//     else if(currentNode === prevNode && nextNode){
//         HEAD = nextNode;
//         length --
//     }
//     // all other cases.
//     else{
//         prevNode.nextNode = nextNode;
//         length --
//     }
// }