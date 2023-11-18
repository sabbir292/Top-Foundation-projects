console.log("dsa")

// Liner search.
// Given an arry find the target, if the target is exist return the index else return null if target doesn't exists in the Array.

// Algo: use a loop to check every item of the array and compare it with the target if matches then return index or the position of the item, else move on.

const linearSearch = (list, target) => {
    for(let i = 0; i < list.length; i++){
        if(target === list[i]) return i
    }
    return "Target Doesn't exist in the list"
}
const arr = [1,2,5,3,6,7,43,5,23,6,3]
console.log(linearSearch(arr, 9))


// Replicate the above functionality of search a target but this time using the Binary Search.

// Algo: Make a function that will take a list and target.
// start from the index of 0 and end wil be the lenght of the arr-1, Find the mid of the arry. check if the mid value is greater or lesser than the target. if it's smaller then the end will be the mid of the new array, and perform the avobe thing same, but if the target is greater then the start will be the mid.

const binarySearch = (list, target) =>{
    if(list.length === 0){
        return "target doesnot exist"
    }else{
        const mid = Math.floor(list.length / 2)
        if(target === list[mid]) return target
        else if (target < list[mid]){
            const newArr = list.slice(0, mid)
            return binarySearch(newArr, target)
        }
        else{
            const newArr = list.slice(mid + 1)
            return binarySearch(newArr, target)
        }
    }
}

console.log(binarySearch([1,2,3,4,6,8,9], 1))

// |Binary search through Loop

const binaryLoopSearch = (list, target)=>{
    let start = 0;
    let end = list.length - 1
    
    while(start <= end){
        console.log('hello')

        let mid = Math.floor((start + end) / 2)
        if(list[mid] === target) {
            return mid
        }
        else if(list[mid] < target){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    return "Doesn't exist"
}
console.log(binaryLoopSearch([1,2,3,4,6,8,9], 9))