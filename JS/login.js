// step-1: add click event handler with the submit button.
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get the text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step-3: get the password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // do not varify email password on the client side
    // step-4: varify eamil and password and check whether valid user or not

    if(email === 'sayem465508@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid user')
    }
})