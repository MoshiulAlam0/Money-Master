//--------------------- for calculet ---------------->>>
function calculetMoney() {
    const incomeField = document.getElementById('income-field');
    const foodField = document.getElementById('food-field');
    const rentField = document.getElementById('rent-field');
    const clothesField = document.getElementById('clothes-field');

    if ((incomeField.value < 0 || incomeField.value === '') || (foodField.value < 0 || foodField.value === '') || (rentField.value < 0 || rentField.value === '') || (clothesField.value < 0 || clothesField.value === '')) {
        alert('Please Proviet Only Number');
    }
    else {
        const incomeFieldValue = parseFloat(incomeField.value);
        const foodFieldValue = parseFloat(foodField.value);
        const rentFieldValue = parseFloat(rentField.value);
        const clothesFieldValue = parseFloat(clothesField.value);

        if ((incomeFieldValue < foodFieldValue) || (incomeFieldValue < rentFieldValue) || (incomeFieldValue < clothesFieldValue)) {
            alert('You can not Expense more than Your Income')
        }
        else {
            const sumAllExpenses = foodFieldValue + rentFieldValue + clothesFieldValue;

            const totalExpenseElement = document.getElementById('total-expenses-amount');
            totalExpenseElement.innerText = sumAllExpenses;

            const currentBalance = incomeFieldValue - sumAllExpenses;
            const balanceElement = document.getElementById('balance-amount');
            balanceElement.innerText = currentBalance;
        }
    }
}


//------------- for Saving section ---------------->>>>>>

function savingCalculet() {
    const savingField = document.getElementById('saving-field');
    const savingFieldValue = parseFloat(savingField.value);

    if ((savingField.value < 0 || savingField.value === '')) {
        alert('Please Provite Currect %')
    }
    else {
        if(savingFieldValue <= 100){
            const incomeField = document.getElementById('income-field');
            const parsentAmount = incomeField.value * savingFieldValue / 100;
    
            const savingAmountElement = document.getElementById('saving-amount');
            savingAmountElement.innerText = parsentAmount;

            const balanceElement = document.getElementById('balance-amount');
            const balance = parseFloat(balanceElement.innerText);
            if(balance > parsentAmount){
                const remainingBalance = balance - parsentAmount;
                const remainingBalanceElement = document.getElementById('remaining-balance');
                remainingBalanceElement.innerText = remainingBalance;  
            }
        }
        else{
            alert('% is not Currect')
        }
    }
}