//1. Deposit money in slot machine
//2. Determine no. of line to make bet
//3. Collect the bet amount
//4. Spin yhe slot machine
//5. Check if the user won or not
//6. Give the user their winnings
//7. Play again

const prompt = require("prompt-sync")();

const deposit = ()=>{
    while(true){
        const depositAmount = prompt("Enter Deposit Amount : ");
        //by default we get string so convert it into number
        const numberDeposit = parseFloat(depositAmount);

        if(isNaN(numberDeposit) || numberDeposit <= 0){
            console.log("Invalid deposit amount! Try Again.");
        }
        else{
            //break while loop if valid
            return numberDeposit;
        }
    }
}
const getNumberOfLines = ()=>{
    while(true){
        const lines = prompt("Enter number of lines : ");
        //by default we get string so convert it into number
        const numberLines = parseFloat(lines);

        if(isNaN(numberLines) || numberLines <= 0 || numberLines > 3){
            console.log("Invalid numbers of Lines! You can choose line from 1 to 3...Try Again");
        }
        else{
            //break while loop if valid
            return numberLines;
        }
    }
}
const getBet = (balance,lines)=>{
    while(true){
        const bet = prompt("Enter the total bet you want to place : ");
        //by default we get string so convert it into number
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance){
            console.log(`Invalid bet! balance is ${balance}..Try Again`);
        }
        else{
            //break while loop if valid
            return numberBet;
        }
    }
}

const balance = deposit();
const lines = getNumberOfLines();
const bet = getBet(balance,lines);