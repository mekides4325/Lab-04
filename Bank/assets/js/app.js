var accounts = [100, 346, 789, 435]

function deposit(amount, accNum){
    accounts[accNum] += amount
    console.log("Deposited to : " + accNum + " Deposited Amount: " + amount + " total balance : " + accounts[accNum])
    return true
}

function withdraw(amount, accNum){
    if (amount < accounts[accNum]){
        if(amount < 100){
            accounts[accNum] -= amount
            console.log("Withdrawn from : "+ accNum + " Withdrawn Amount: " + amount + " total balance : " + accounts[accNum])
            return true
        }else{
            alert("you cannot withdraw more than $100")
        }
    } else{
        alert("No enough Money to withdraw")
    }
    return false
}

function balance(accNum){
    alert("Your Balance is " + accounts[accNum])
}

function transfer(from, to, amount){
    if (withdraw(amount, from)){
        deposit(amount, to)
    }
}