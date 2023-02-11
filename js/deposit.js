// step-1: add evenlistner for the button click 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // take the deposit amount from input deposit section 
    // input theke neyar jonno .value use krte hbe
    const depositField=document.getElementById('input-deposit');
    const NewDepositAmountString=depositField.value;
    const NewDepositAmount=parseFloat(NewDepositAmountString);

    // clear deposit input field
    depositField.value='';

    if(isNaN(NewDepositAmount)){
        alert('Please insert amount in number');
        return;
    }

    // step-3: get the current deposit total
    const depositTotalElement=document.getElementById('deposit-total');
    const depositPreviousTotalString=depositTotalElement.innerText;
    const depositPreviousTotal=parseFloat(depositPreviousTotalString);
    // without input filed for the get value from any html element  we need to use .innerText 
    
    // step-4: add numbers to set the total deposit
    const currentDepositTotal=depositPreviousTotal+NewDepositAmount;
    // set the deposit total
    depositTotalElement.innerText=currentDepositTotal;
    // step-5: get current balance total
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    // step-6: calculate current total balance
    const currentBalanceTotal=previousBalanceTotal+NewDepositAmount;
    balanceTotalElement.innerText=currentBalanceTotal;

    
})