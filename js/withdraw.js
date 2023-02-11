// same as the deposit.js
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const inputWithdrawField=document.getElementById('input-withdraw');
    const newWithdrawAmountString=inputWithdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);


    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
    

    const newTotalWithdraw=previousWithdrawTotal+newWithdrawAmount;
    withdrawTotalElement.innerText=newTotalWithdraw;


    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);


    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
    balanceTotalElement.innerText=newBalanceTotal;


    inputWithdrawField.value='';

})