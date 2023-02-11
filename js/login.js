// step-1 : add click at submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get the email address from the email field
    // 2.a : set id on the html Element 
    // 2.b : get the Element 
    // 2.c get the value from the element 
    // important: get value from the input field always we have to use .value
     const emailField=document.getElementById('user-email').value;
    //  step-3: get the password from the password field
    const passwordField=document.getElementById('user-password').value;
    console.log(emailField,passwordField);
    //don't varify email and password like this on the client side....only for this project
    if(emailField==='shovan@banik.com' && passwordField==='puja1234'){
        window.location.href='bank.html';
    }
    else{
        alert('Invalid User. Check your email or password');
    }
})