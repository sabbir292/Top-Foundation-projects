// Graph Traversal.------


const graph = {
    a:['b', 'c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

// depth first.

const depthFirstRecursion = (node, graph) =>{
    if(!node) return 
    else{
        for(item of node){
            console.log(item)
            // console.log(graph[item])
            depthFirstRecursion(graph[item], graph) 
        }
    }
}

depthFirstRecursion('a', graph)

const depthFirstTraversal = (origin, graph) => {
    const stack = [origin]
    while(stack.length > 0){
        const current = stack.pop()
        console.log(current)

        let neighbors = graph[current]
        for (let neighbor of neighbors){
            stack.push(neighbor)
        }
    }
}

depthFirstTraversal('a', graph)

// breadth first

const breadthFirstTraversal = (node, graph) => {
    let que = [node]
    while(que.length > 0){
        let current = que.shift()
        console.log(current)

        let neighbors = graph[current]
        for (const neighbor of neighbors){
            que.push(neighbor)
        }
    }
}
breadthFirstTraversal('a', graph)


// |Has a Path------

// Depth first---
const hasPathRecursion = (graph, source, target) => {
    if(source === target) return true;
    else{
        for(const neighbor of graph[source]){
            return hasPathRecursion(graph, neighbor, target)
        }
    }
    return false
}

console.log(hasPathRecursion(graph, 'a', 'f'))

// 
const hasPathTraversal = (graph, source, target) => {
    const stack = [source]
    while(stack.length > 0){
        const current = stack.pop()
        if(current === target) return true
        else{
            for(const neighbor of graph[current]){
                stack.push(neighbor)
            }
        }
    }
    return false
}
console.log(hasPathTraversal(graph, 'a', 'f'))

// Breadthfirst--

const hasApath = (graph, source, target) => {
    const que = [source]
    while (que.length > 0){
        const current = que.shift()
        if(current === target) return true
        
        for(const neighbor of graph[current]){
            que.push(neighbor)
        }
    }
    return false
}
console.log(hasApath(graph, 'a', 'f'))