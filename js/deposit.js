// step-1: add evenlistner for the button click 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // take the deposit amount from input deposit section 
    // input theke neyar jonno .value use krte hbe
    const depositField=document.getElementById('input-deposit');
    const NewDepositAmountString=depositField.value;
    const NewDepositAmount=parseFloat(NewDepositAmountString);
    // step-3: get the current deposit total
    const depositTotalElement=document.getElementById('deposit-total');
    const depositPreviousTotalString=depositTotalElement.innerText;
    const depositPreviousTotal=parseFloat(depositPreviousTotalString);
    // without input filed for the get value from any html element  we need to use .innerText 

    const currentDepositTotal=depositPreviousTotal+NewDepositAmount;
    depositTotalElement.innerText=currentDepositTotal;

    // clear deposit input field
    depositField.value='';
})