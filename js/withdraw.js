// same as the deposit.js
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const inputWithdrawField=document.getElementById('input-withdraw');
    const newWithdrawAmountString=inputWithdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);


    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
    
// nicher ai just 2 line code toko aikhane rakhle validation a jhamela hoy tai ai code toko niche validation ar niche diye dici...bujar jonno aikhane comment akare copy rekhe dici

    // const newTotalWithdraw=previousWithdrawTotal+newWithdrawAmount;
    // withdrawTotalElement.innerText=newTotalWithdraw;

    // ai 2 line

    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);

    // function a return paoar por code exit kore bole nicher 1 line code ta k aikhane ane rakhci...niche ak copy commnet akare rekhe dici
    inputWithdrawField.value=''; 
    // ai 1 line

    const newTotalWithdraw=previousWithdrawTotal+newWithdrawAmount;
    withdrawTotalElement.innerText=newTotalWithdraw;

    if(newTotalWithdraw > previousBalanceTotal){
        alert('You do not have sufficient balance');
        return;
    }

    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
    balanceTotalElement.innerText=newBalanceTotal;


    // inputWithdrawField.value='';

})