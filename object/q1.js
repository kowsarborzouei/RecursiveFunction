function fun(input, searchNum) {
    if (typeof input != "object") return ('please enter an object :)')
    for (let key in input){
        if (typeof input[key] === 'object'){
            fun(input[key], searchNum);
        }
        else if (typeof input[key] === 'number' && input[key] === searchNum){
            console.log("TRUE")
        }
    }
}
const input =  {
    d: {
        c: {
            b: {
                a: {
                    number: 20,
                    str: 'hi'
                }
            }
        }
    }
}


fun(input,20)