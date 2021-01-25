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

(
    function(){
        service = parseInt(prompt("What do you want to do today: \n 1: Deposit \n 2: Withdraw \n 3: Inquire Balance \n 4: transfer"))
        console.log(accounts)
        switch (service) {
            case 1:
                deposit(parseInt(prompt("Enter amount: ")), parseInt(prompt("Enter account Number(between 0 and "+(accounts.length-1)+"): ")));
                break;
            case 2:
                withdraw(parseInt(prompt("Enter amount: ")), parseInt(prompt("Enter account Number(between 0 and "+(accounts.length-1)+"): ")));
                break;
            case 3:
                balance(parseInt(prompt("Enter account Number(between 0 and "+(accounts.length-1)+"): ")));
                break;
            case 4:
                transfer(parseInt(prompt("Enter account to debt from Number(between 0 and "+(accounts.length-1)+"): ")),parseInt(prompt("Enter account to deposit into Number(between 0 and "+(accounts.length-1)+"): ")), parseInt(prompt("Enter amount: ")));
                break;
            default:
                alert("Invalid Input");
                break;
        }
    }
)();