const form=document.getElementById('form');
const username=document.getElementById('username');
const lastname=document.getElementById("lastname");
const email=document.getElementById('email');
const password=document.getElementById('password');
const Phonenumber=document.getElementById('password2');
const bio=document.getElementById("bio");


//Show input error message

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
    
}

//Email

function isValidEmail(email)
{
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}





form.addEventListener('submit',function(e){
    e.preventDefault();

    if(username.value===''){
        showError(username,'First name must be alphanumeric and contain 3-16 characters');
    }
    else{
        showSuccess(username);
    }
    if(lastname.value===''){
        showError(lastname,'lastname must be alphanumeric and contain 3-16 characters');
    }
    else{
        showSuccess(lastname);
    }
    if(email.value===''){
        showError(email,'Email must be valid address eg.abced@example.com');
    }else if(!isValidEmail(email.value)){
        showError(email,'Email must be valid address eg.abced@example.com ');
    }
    else{
        showSuccess(email);
    }

    if(password.value===''){
        showError(password,'Password must be alphanumeric(@,_and- are also allwed) and between 6-20 character');
    }
    else{
        showSuccess(password);
    }
    if(Phonenumber.value===''){
        showError(Phonenumber,'A valid Telephone number(10 digits and 9864-8765-21)');
    }
    else{
        showSuccess(Phonenumber);
    }
    if(bio.value===''){
        console.log("as");
        showError(bio,'Bio must conatin only lowercase letters,underscores,hyphens and be 8-50 characters');
    }
    else{
        showSuccess(bio);
    }

    
});



