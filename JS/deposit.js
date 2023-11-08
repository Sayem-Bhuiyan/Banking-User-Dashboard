// added event handler to the deposit btn
document.getElementById('btn-deposit').addEventListener('click', function(){
    // getting the input field and finding the value and set it to float number
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // clearing the input field
    depositField.value = '';

    // checking the input is weather NaN or not
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number')
        return;
    }
    // getting the deposit balance and set the value to float
    const depositTotalElement = document.getElementById('deposit-balance');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // calculate the deposit amount
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // get the total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString)

    // calculate the total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})