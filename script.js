//Name: Marco
//Date: 10/11/2023
var isStealing = true;
var pennyCount = 0;
var nickelCount = 0;
var dimeCount = 0;
var quarterCount = 0;
var balance = 0;
const borrowButton = document.getElementById("borrowButton");
const returnButton = document.getElementById("returnButton");
const statusWord = document.getElementById("statusWord");
const statusWord2 = document.getElementById("statusWord2");
const pennyButton = document.getElementById("pennyButton");
const nickelButton = document.getElementById("nickelButton");
const dimeButton = document.getElementById("dimeButton");
const quarterButton = document.getElementById("quarterButton");
const pennyText = document.getElementById("pennyText");
const nickelText = document.getElementById("nickelText");
const dimeText = document.getElementById("dimeText");
const quarterText = document.getElementById("quarterText");
const balanceText = document.getElementById("balanceText")
borrowButton.addEventListener("click", changeStatusToBorrow);
returnButton.addEventListener("click", changeStatusToReturn);
pennyButton.addEventListener("click", changePennyStatus);
nickelButton.addEventListener("click", changeNickelStatus);
dimeButton.addEventListener("click", changeDimeStatus);
quarterButton.addEventListener("click", changeQuarterStatus);
function updateBalance(){
    if (balance < 0)
    {
        balance = Math.round(balance * 100) / 100;
        balanceText.textContent = `Total Balance: -$${Math.abs(balance)}`;
    }
    else
    {
        balance = Math.round(balance * 100) / 100;
        balanceText.textContent = `Total Balance: $${balance}`;
    }
}
function changeStatusToBorrow(){
    statusWord.textContent = "(BORROWING)";
    statusWord2.textContent = "(BORROW)";
    isStealing = true;
    document.body.style.backgroundColor = "#3CB043";
}


function changeStatusToReturn(){
    statusWord.textContent = "(RETURNING)";
    statusWord2.textContent = "(RETURN)";
    isStealing = false;
    document.body.style.backgroundColor = "#C34FBC";
}
//Generates a random number from 1 to 6
function generateRandomDiceNumber() {
    return Math.floor((Math.random() * 6) + 1);
}
function changePennyStatus(){
    if (isStealing){
        pennyCount += 1;
        balance += 0.01;
        pennyText.textContent = `Penny: ${pennyCount}`;
        updateBalance();
    }
    else if (!(isStealing)){
        pennyCount -= 1;
        balance -= 0.01;
        pennyText.textContent = `Penny: ${pennyCount}`;
        updateBalance();
    }
}
function changeNickelStatus(){
    if (isStealing){
        nickelCount += 1;
        balance += 0.05;
        nickelText.textContent = `Nickel: ${nickelCount}`;
        updateBalance();
    }
    else if (!(isStealing)){
        nickelCount -= 1;
        balance -= 0.05;
        nickelText.textContent = `Nickel: ${nickelCount}`;
        updateBalance();
    }
}
function changeDimeStatus(){
    if (isStealing){
        dimeCount += 1;
        balance += 0.1;
        dimeText.textContent = `Dime: ${dimeCount}`;
        updateBalance();
    }
    else if (!(isStealing)){
        dimeCount -= 1;
        balance -= 0.1;
        dimeText.textContent = `Dime: ${dimeCount}`;
        updateBalance();
    }
}


function changeQuarterStatus(){
    if (isStealing){
        quarterCount += 1;
        balance += 0.25;
        quarterText.textContent = `Quarter: ${quarterCount}`;
        updateBalance();
    }
    else if (!(isStealing)){
        quarterCount -= 1;
        balance -= 0.25;
        quarterText.textContent = `Quarter: ${quarterCount}`;
        updateBalance();
    }
}
