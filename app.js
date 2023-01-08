const fName= document.getElementById("fName");
const lName= document.getElementById("lName");
const email= document.getElementById("email");
const password= document.getElementById("password");


function handleSubmit(event){
    event.preventDefault();
    validateInputs();
}
function isValidEmail(email){
    const mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return mailFormat.test(String(email).toLowerCase());//
}
function setError(input, message){
    const inputControl = input.parentElement;
    let errorDisplay = document.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}
function setSuccess(input){
    const inputControl = input.parentElement;
    let errorDisplay = document.querySelector(".error");
    
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("remove");

    }

function validateInputs(){
    const fNameValue = fName.value.trim();
    const lNameValue = lName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fNameValue === ""){
        setError(fName, "This field cannot be blank!");
    }else{
        setSuccess(fName);
    }

    if(lNameValue === ""){
        setError(lName, "This field cannot be blank!");
    }else{
        setSuccess(lName);
    }

    if(emailValue === ""){
        setError(email, "This field cannot be blank!");
    }else if(!isValidEmail(emailValue)){
        setError(email, "Email not valid!");
    }else{
        setSuccess(email);
    }
    
    if(passwordValue === ""){
        setError(password, "This field cannot be blank!");
    }else if(passwordValue.length <8){
        setError(password, " Password Must be at least 8 characters!");
        }else{
        setSuccess(password);
    }
}
