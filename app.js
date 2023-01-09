const firstName= document.getElementById("firstName");
const lastName= document.getElementById("lastName");
const email= document.getElementById("email");
const password= document.getElementById("password");
const form= document.getElementById("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    validateInputs();

}
function setError (input, message) {
    const inputControl = input.parentElement;
    const errorMessage = inputControl.querySelector(".errorM");

    errorMessage.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

function setSuccess (input) {
    const inputControl = input.parentElement;
    const errorMessage = inputControl.querySelector(".errorM");

    errorMessage.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

function isValidEmail(email){
    const format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return format.test(String(email).toLowerCase());
}

function validateInputs(){
    const firstNameV = firstName.value.trim();
    const lastNameV = lastName.value.trim();
    const emailV = email.value.trim();
    const passwordV = password.value.trim();

    if(firstNameV === ""){
        setError(firstName, "First name  cannot be empty!" );
    } else {
        setSuccess(firstName);
    }

    if(lastNameV === ""){
        setError(lastName, "Last name cannot be empty!" );
    } else {
        setSuccess(lastName);
    }
    if(emailV === ""){
        setError(email, "Email cannot be empty!");
    }else if(!isValidEmail(emailV)){
        setError(email, "Email not valid!");
    }else{
        setSuccess(email);
    }
    if(passwordV === ""){
        setError(password, "Password cannot be empty!");
    }else if(passwordV.length <8){
        setError(password, " Password Must be at least 8 characters!");
        }else{
        setSuccess(password);
    }
}

