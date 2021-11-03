let counter = 0;

function integer(arr) {
    if (typeof arr === "string" || typeof counter !== "number" || counter < 0)
        return ('please checking inputs')
    if (arr.length === 0 || typeof arr === "string") return counter
    // arr=arr.reduce((acc,x)=>{
    //     return acc.concat(x)
    // },[])
    // console.log(arr)
    //
    // arr=arr.reduce((acc,x)=>{
    //     return acc.concat(x)
    // },[])
    // console.log(arr)
    for(let item of arr) {
        if (Number.isInteger(item)) counter++
        if (Array.isArray(item)) counter = +integer(item)
    }
    return counter
}

let arr = [[[5], 3], 0, 2, ['foo'], [], [4, [5.1, 6]]]
console.log(integer(arr))
