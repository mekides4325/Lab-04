function add2(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mult(a,b){
    return a*b
}

function div(a,b){
    return a/b
}
function addMultiple(arr){
    sum = 0
    for(let i=0;i< arr.length;i++){
        sum += arr[i]
    }
    return sum
}

function multiplyMultiple(arr){
    let product = 1

    for(let i=0;i< arr.length;i++){
        product = product * arr[i]
    }
    return product
}
 
function square(a){
    return a*a
}

function max(a,b){
    if(a>b){
        return a
    }
    else{
        return b
    }
}

function min(a,b){
    if(a<b){
        return a
    }
    else{
        return b
    }
}


function avrage(arr){
    sum = 0
    for(let i=0;i< arr.length;i++){
        sum += arr[i]

        var av = sum / arr.length
    }

return av
}
