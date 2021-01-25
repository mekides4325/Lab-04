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

//Immediately Invoking function expression(IIFEs)
(function(){
    let a;
    let b;
    let service = parseInt(prompt("choice: \n 1: Add  \n 2: Subtract  \n 3: multiply  \n 4:  Divide   \n 5: multiply multiple numbers \n 6: add multiple numbers \n 7:square \n 8:max \n 9:min \n 10:calculating avarage"));
    switch (service) {
        case 1:
            alert(add2(parseInt(prompt("Enter first Number: ")),parseInt(prompt("Enter second Number: "))))
            break;
        case 2:
                alert(sub(parseInt(prompt("Enter first Number: ")) ,parseInt(prompt("Enter second Number: "))))
                break;

        case 3:
            alert(mult(parseInt(prompt("Enter first Number: ")),parseInt(prompt("Enter second Number: "))))
            break; 
            
            
            
        case 4:
                let a = prompt("Enter first Number: ") 
                let b = prompt("Enter second Number: ")
                if (b == 0){alert("division by zero is not supported")}
                else{
                    alert(div(a,b))
                }
                break;    
      
 
        case 5:
            var nums = prompt("how many numbers tha you want to multiply: ")
            array = new Array()
            for(let i=0; i<nums; i++){
                array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
            }
            alert(multiplyMultiple(array))
            break;
        
            case 6:
                let length = prompt("how many number that you want to add : ")
                array = new Array()
                for(let i=0; i<length; i++){
                    array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
                } 
                alert(addMultiple(array))
                break;


            case 7:
                alert(square(parseInt(prompt("Enter Number: "))))
                alert(square(a))
                break;
            case 8:
                alert(max(parseInt(prompt("Enter first Number: ")),parseInt(prompt("Enter second Number: "))))
                alert(max(a,b))
                break;

            case 9:
                alert(min(parseInt(prompt("Enter first Number: ")),parseInt(prompt("Enter second Number: "))))
                alert(min(a,b))
                break;
         



            case 10:
                var nums = prompt("how many numbers that you want to calculate there avarage: ")
                array = new Array()
                for(let i=0; i<nums; i++){
                    array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
                }
                alert(avrage(array))
                break;    
           
            default:
            alert("Invalid input")
            break;
    }

})();
