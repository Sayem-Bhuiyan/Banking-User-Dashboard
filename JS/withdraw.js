// added event handler to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // getting in input value and making it to floating number
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);

    // clearing the input field
    withdrawField.value = '';
    // checking the input is NaN or Number
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number')
        return;
    }

    // getting the withdraw balance and making it to  floating number
    const withdrawAmountElement = document.getElementById('withdraw-balance');
    const withdrawAmountString = withdrawAmountElement.innerText;
    const previousWithdrawAmount = parseFloat(withdrawAmountString);

    // calculate total withdraw balance
    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

    // getting the total balance of account and making it to float
    const totalBalanceElement = document.getElementById('balance-total');
    const totalBalanceElementString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(totalBalanceElementString);

    // checking the withdreaw amount is greater than the main balance or not
    if(newWithdrawAmount > previousTotalBalance){
        alert('You can not withdraw more than you have');
        return;
    }

    withdrawAmountElement.innerText = totalWithdrawAmount;
    // caculate the new main balance
    const newBalance = previousTotalBalance - newWithdrawAmount;
    totalBalanceElement.innerText = newBalance;

})