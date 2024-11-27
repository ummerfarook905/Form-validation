const form=document.getElementById('form');
const username=document.getElementById('username');
const mob=document.getElementById('mob');
const email=document.getElementById('email');
const dob=document.getElementById('dob');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');
const submitbutton=document.getElementById('submitbutton');

form.addEventListener('submit', e=> {
    e.preventDefault();
    validateinputs();
})

// Check Error 
const setError = (element,message) => {
    const input_control = element.parentElement;
    const small = input_control.querySelector("small"); 
    small.innerText = message; 
    input_control.classList.add('error'); 
    input_control.classList.remove('success');
}
const setSuccess = element => {
    const input_control = element.parentElement;
    const small = input_control.querySelector("small"); 
    small.innerText = ''; 
    input_control.classList.add('success');  
    input_control.classList.remove('error');
}

//Validating email and password///
const isValidEmail=email=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidpassword=password=>{
    const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    return re.test(password);
}

const validateinputs=()=>{
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const numberval = mob.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = confirmpassword.value.trim();
    const dobval = dob.value.trim();

    //Validate Username
    if(usernameval ===''){
        setError(username, 'User name cannot be blank');
    }
    else if(usernameval.length<=2){
        setError(username,'Username must contain 3 or more characters');
    }
    else{
        setSuccess(username);
    }

    //Validate Email
    if(emailval ===''){
        setError(email,'email cannot be blank');
    }
    else if(!isValidEmail(emailval)){
        setError(email,'Provide a valid email')
    }
    else {
        setSuccess(email);
    }

    //validating password.
    if(passwordval ===''){
        setError(password,'Password cannot be blank');
    }
    else if(!isValidpassword(passwordval)){
        setError(password,'password too weak');
    }
    else{
        setSuccess(password);
    }

    //Validating confirm password
    if(cpasswordval ===''){
        setError(confirmpassword,'Conform password cannot be blank')
    }
    else if(passwordval !== cpasswordval){
        setError(confirmpassword,'Password not matching');
    }
    else{
        setSuccess(confirmpassword);
    }

    //Validating phone number
    if(numberval ===''){
        setError(mob,'Phone number cannot be empty');
    }
    else if(!/^\d{10}$/.test(numberval)){
        setError(mob,'Phone number must contain 10 numbers');
    }
    else{
        setSuccess(mob);
    }

    //Validating date of birth
    if(dobval ===''){
        setError(dob,'Date of birth cannot be empty');
    }
    else {
        setSuccess(dob); 
    }
}



