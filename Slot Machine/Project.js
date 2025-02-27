//1. Deposit money in slot machine
//2. Determine no. of line to make bet
//3. Collect the bet amount
//4. Spin yhe slot machine
//5. Check if the user won or not
//6. Give the user their winnings
//7. Play again

const prompt = require("prompt-sync")();

const rows = 3;
const cols = 3;

const symbols_count = {
    "A" : 2,    
    "B" : 2,    
    "C" : 2,    
    "D" : 2,    
}
const symbols_value = {
    "A" : 5,    
    "B" : 4,    
    "C" : 3,    
    "D" : 2,    
}

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
        const lines = prompt("Enter number of lines (1-3): ");
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
        const bet = prompt("Enter the bet per line : ");
        //by default we get string so convert it into number
        const numberBet = parseFloat(bet);
        const totalBet = numberBet*lines;
        if(isNaN(numberBet) || numberBet <= 0 || totalBet > balance){
            console.log(`Invalid bet! balance is ${balance} and required is ${totalBet}..Try Again`);
        }
        else{
            //break while loop if valid
            return numberBet;
        }
    }
}

const spin = ()=>{
    
}

const balance = deposit();
const lines = getNumberOfLines();
const bet = getBet(balance,lines);